let { crc16, toBytes } = require("./brc3utils.js");

class BRC3PacketHandler {
  constructor(onPacketComplete) {
    this.onPacketComplete = onPacketComplete;
    this.sequence = undefined;
    this.data = [];
  }

  handle(packet) {
    if (packet.length < 4) {
      this.sequence = undefined;
      return;
    }

    let seqAndFinal = packet[0] + (packet[1] << 8);
    let final = (seqAndFinal & 0x8000) > 0;
    let sequence = seqAndFinal & 0x7fff;
    let crc = packet[2] + (packet[3] << 8);
    let payload = packet.slice(4);

    if (sequence === 0) {
      this.sequence = 0;
      this.data = payload;
    }
    else {
      if (sequence !== this.sequence + 1) {
        console.log("Bad sequence", sequence, this.sequence);
        this.sequence = undefined;
        return;
      }

      this.data = this.data.concat(payload);
      this.sequence = sequence;
    }

    if (final) {
      this.sequence = undefined;

      if (crc !== crc16(this.data)) {
        console.log("Bad CRC", crc, crc16(this.data));
        return;
      }

      if (this.onPacketComplete) {
        this.onPacketComplete(toBytes(this.data));
      }
    }
  }
}

module.exports = BRC3PacketHandler;
