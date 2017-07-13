/**
 * POSTCSS SIDES
 * A postcss plugin to enable 'null' in margin and padding shorthands
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let postcss         =   require('postcss'),
    util            =   require('postcss-plugin-utilities');

// export plugin
module.exports = postcss.plugin('postcss-sides', options => {
    return css => {
        let ruleMap = {
            'margin': {
                'margin-top':               [util.isSize, 'auto', 'null'],
                'margin-right':             [util.isSize, 'auto', 'null'],
                'margin-bottom':            [util.isSize, 'auto', 'null'],
                'margin-left':              [util.isSize, 'auto', 'null']
            },
            'padding': {
                'padding-top':              [util.isSize, 'auto', 'null'],
                'padding-right':            [util.isSize, 'auto', 'null'],
                'padding-bottom':           [util.isSize, 'auto', 'null'],
                'padding-left':             [util.isSize, 'auto', 'null']
            }
        }
        for(let [property, rules] of Object.entries(ruleMap)) {
            css.walkDecls(property, decl => {
                if(decl.value.indexOf('null') >= 0) {
                    let parent = decl.parent;
                    for (let [prop, val] of Object.entries(util.getSides(postcss.list.space(decl.value), ruleMap[property]))) {
                        decl.before({ prop: prop, value: val });
                    }
                    decl.remove();
                    if(parent.nodes.length === 0) {
                        parent.remove();
                    }
                }
            });
        }
    }
});