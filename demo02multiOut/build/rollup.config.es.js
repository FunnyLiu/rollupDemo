import base from './rollup.config.base'

const config = Object.assign({},base,{
    output: {
        name:'webMonitorSdk',
        file:'dist/web-monitor-sdk.esm.js',
        format:'es'
    }
})


export default config