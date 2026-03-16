# Algorithm(Not finished yet)

## System Configuration
A node has the following four states:
- RSA key
- address (public key)
- counter
- proof pool

This system handles the following two types of structures:
- stamp
- proof
## Stamp
A stamp is a timestamp issued by a node.
```
Stamp = {
    address: issuing node
    count: issuing node's counter value
    public key: Proof public key
    nonce: PoW nonce
    index: to identify
    sign: issuing node's signature
}
```

## Proof
A proof is is a collection of stamps.
```
Proof = {
    data
    stamps: collected stamps
    secret key: proof secret key corresponding to the stamp's public key
    address: issuing node
    difficulty: for PoW
    time: UTC for setting difficulty
    sign: issuing node's signature
}
```