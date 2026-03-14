import { logger } from "./logger"
import { initP2PServer } from "./p2p"
import { initNode } from "./proof/node"
import { initAPIServer } from "./api"

BigInt.prototype.toJSON = function() { return this.toString(); }

const init = () => {
    logger.info("SYS", "Initializing Bit:Clock")
    initNode()
    const p2pServer = initP2PServer()
    const apiServer = initAPIServer()
    process.on('SIGINT', () => {
        logger.info("SYS", "Bit:Clock is closing")
        p2pServer.close(()=>{
            logger.info("SYS", "P2P server was closed")
        })
        apiServer.close(()=>{
            logger.info("SYS", "API server was closed")
        })
    })
}
init()
