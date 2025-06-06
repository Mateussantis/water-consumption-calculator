Ext.define('App.view.calculator.Calculator', {
    extend: 'Ext.panel.Panel',
    xtype: 'calculator',

    controller: 'calculator',
    viewModel: {
        type: 'calculator'
    },

    title: 'Calculadora De Consumo De Agua',
    padding: 0,
    
    header: {
        style: {
            backgroundColor: '#1B72A4',
            color: '#FFFFFF',
            paddingTop: "25px",
            paddingBottom: "25px",
            textAlign: 'center'
        },
        titleAlign: 'center',
    },

    items: [
    {
        xtype: 'container',
        cls: 'div-container',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'start',
                },
                defaults: {
                    margin: '15 10'
                },
                items: [
                    {
                        xtype: 'numberfield',
                        cls: 'input-form',
                        bind: '{cubicMeters}',
                        minValue: 0,
                        allowDecimals: false,
                        allowBlank: false,
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: 'Calcular',
                        handler: 'onCalculateClick',
                        cls: 'button-form'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'resultPanel',
                tpl: [
                    '<div class="tier-container">',
                    '<tpl for="tiers">',
                        '<div class="tier-card">',
                            '<b class="description">{description}:</b>',
                            '<div class="line">',
                                '<span class="quantity">{quantity}</span>',
                                '<span>&nbsp;x&nbsp;</span>',
                                '<span class="unitPrice">R${unitPrice}</span>',
                            '</div>',
                            '<p class="subtotal">R${subtotal}</p>',
                        '</div>',

                    '</tpl>',
                    '</div>',
                    '<div class="total-div"><b class="total">Total:</b> <p class="total">R${total}</p></div>'
                ],
                cls: 'result-panel',
                padding: '0 10'
            }
        ]
    }
]

});
