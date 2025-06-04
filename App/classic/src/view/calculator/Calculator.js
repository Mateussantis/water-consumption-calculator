Ext.define('App.view.calculator.Calculator', {
    extend: 'Ext.panel.Panel',
    xtype: 'calculator',

    controller: 'calculator',
    viewModel: {
        type: 'calculator'
    },

    title: 'Calcular Consumo',
    padding: 0,
    width: 0,

    items: [
        {
            xtype: 'numberfield',
            fieldLabel: 'Metros cúbicos',
            bind: '{cubicMeters}',
            minValue: 0,
            allowDecimals: false,
            allowBlank: false
        },
        {
            xtype: 'button',
            text: 'Calcular',
            margin: '10 0',
            handler: 'onCalculateClick'
        },
        {
            xtype: 'panel',
            itemId: 'resultPanel',
            tpl: [
                '<tpl for="tiers">',
                    '<div><b>{description}:</b> {quantity} x R${unitPrice} = R${subtotal}</div>',
                '</tpl>',
                '<div style="margin-top:10px;"><b>Total:</b> R${total}</div>'
            ]
        }
    ]
});
