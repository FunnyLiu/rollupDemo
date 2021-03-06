import base from './rollup.config.base'


const config = Object.assign({},base,{
    output: {
        exports: 'named',
        name:'webMonitorSdk',
        file:'dist/web-monitor-sdk.umd.js',
        format:'umd'
    }
})

export default config