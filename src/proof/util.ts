import NodeRSA from "node-rsa";

const toHexString = (buf: Buffer): string => {
    return buf.toString("hex")
}
const toBuffer = (str: string): Buffer => {
    return Buffer.from(str, "hex")
}

function pkToKey(pk: string): NodeRSA {
    var key = new NodeRSA()
    key.importKey(toBuffer(pk), "pkcs1-public-der")
    return key
}
function skToKey(sk: string): NodeRSA {
    var key = new NodeRSA()
    key.importKey(toBuffer(sk), "pkcs1-private-der")
    return key
}
function keyToPk(key: NodeRSA): string {
    return toHexString(key.exportKey("pkcs1-public-der"))
}
function keyToSk(key: NodeRSA): string {
    return toHexString(key.exportKey("pkcs1-private-der"))
}

export { toHexString, toBuffer, pkToKey, skToKey, keyToPk, keyToSk }