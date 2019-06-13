const { addLessLoader, override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@font-size-base": "12px",
            "@text-color": 'rgba(0, 0, 0, .85)'
        }
    })
);