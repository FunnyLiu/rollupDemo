# rollup打包相关demo


## demo01ts 使用typescript

``` js
import typescript from 'rollup-plugin-typescript';

export default {
    input:'./src/test.ts',
    output:{
        'format':'umd',
        'file':'./dist/test.js'
    },
    plugins:[
        // http://www.typescriptlang.org/docs/handbook/compiler-options.html
        typescript({
            module:"ES6",
            target:"ES5"
        })
    ]
}
```


## demo02multiOut 多文件输出

输出多个文件版本如es,cjs,umd,iife

base:
``` js
import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'


export default {
    input: 'src/index.js',
    plugins:[
        resolve({
            browser:true
        }),
        cjs()
    ],
    watch: {
        include: 'src/**'
    }
}
```
 
iife:
``` js
import { terser } from 'rollup-plugin-terser'
import base from './rollup.config.base'

const config = Object.assign({},base,{
    output: {
        exports: 'named',
        name:'webMonitorSdk',
        file:'dist/web-monitor-sdk.min.js',
        format:'iife'
    }
})

config.plugins.push(terser())

export default config
```