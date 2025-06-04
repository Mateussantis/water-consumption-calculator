Ext.define('AguaApp.store.Tiers', {
    extend: 'Ext.data.Store',
    alias: 'store.tiers',
    model: 'AguaApp.model.Tier',
    data: [] // vai ser carregado dinamicamente
});
