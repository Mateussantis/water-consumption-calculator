Ext.define('App.view.calculator.CalculatorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.calculator',

    onCalculateClick: function () {
        const vm = this.getViewModel();
        const cubicMeters = vm.get('cubicMeters');
        const view = this.getView();

        if (cubicMeters <= 0) {
          Ext.Msg.alert('Erro', 'Informe um valor válido.');
          return;
        }

        Ext.Ajax.request({
            url: 'http://localhost:5165/consumption/calculate',
            method: 'POST',
            jsonData: { cubicMeters },
            success: function (response) {
              try {
                const result = Ext.decode(response.responseText);
                if (result) view.down('#resultPanel').update(result);
              } catch (e) {
                Ext.Msg.alert('Erro', 'Resposta inválida da API.');
              }
            },
            failure: function (response) {
              Ext.Msg.alert('Erro', 'Falha na requisição.');
            }
        });
    }
});
