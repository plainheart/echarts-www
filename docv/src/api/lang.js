/**
 * API doc language.
 */
define(function (require) {

    var $ = require('jquery');

    /**
     * Chinese
     * @type {Object}
     */
    var cn = {
        queryBoxPlaceholderFuzzyPath: '搜索（快捷键\'/\'） 例如输入：ser(line).emph',
        queryBoxPlaceholderAnyText: '搜索（快捷键\'/\'） 例如输入：样式',
        queryBoxTextFuzzyPath: '在属性中搜索',
        queryBoxTextAnyText: '全文搜索',
        descAreaLabelType: '类型',
        descAreaLabelDefaultValue: '默认值'
    };

    /**
     * English
     * @type {Object}
     */
    var en = {
        queryBoxPlaceholderFuzzyPath: 'Search (Short cut:\'/\'). Try input: ser(line).emph',
        queryBoxPlaceholderAnyText: 'Search (Short cut:\'/\'). Try input: style',
        queryBoxTextFuzzyPath: 'Search in properties',
        queryBoxTextAnyText: 'Full-text search',
        descAreaLabelType: 'Type',
        descAreaLabelDefaultValue: 'Default Value'
    };

    // Setting in html.
    return $('html').attr('lang').toLowerCase() === 'en' ? en : cn;
});
