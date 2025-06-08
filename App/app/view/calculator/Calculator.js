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
            backgroundColor: '#dfebfa',
            paddingTop: "25px",
            paddingBottom: "25px",
            textAlign: 'center'
        },
        // titleAlign: 'center',
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
                    margin: '30 10'
                },
                items: [
                    {
                        xtype: 'numberfield',
                        cls: 'input-form',
                        bind: '{cubicMeters}',
                        hideTrigger: true, 
                        allowDecimals: false,
                        allowBlank: false,
                        minValue: 0,
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text: 'Calcular',
                        handler: 'onCalculateClick',
                        cls: 'button-form',
                        listeners: {
                        afterrender: function (btn) {
                            btn.setText('<span style="font-weight: 600; color: #1e294d;">Calcular</span>');
                        }
                    }
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
