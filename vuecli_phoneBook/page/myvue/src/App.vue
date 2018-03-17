<template>
  <div id="app">
        <!-- 头部组件 -->
        <my-header :custom-title="title" custom-fixed></my-header>
        <!-- 列表组件 -->
        <my-list :user-data='userData'></my-list>
        <!-- 弹窗组件 -->
        <my-alert :custom-title='customTitle' style="display:none"></my-alert>
    </div>
</template>

<script>
 var userData = [{
                index: 'A',
                users: [{
                        name: 'a1',
                        tel: '18219384431'
                    },
                    {
                        name: 'a2',
                        tel: '193042344332'
                    },
                    {
                        name: 'a3',
                        tel: '3242235235235'
                    },
                    {
                        name: 'a4',
                        tel: '8568567454564'
                    },
                    {
                        name: 'a5',
                        tel: '4533452426346'
                    }
                ]
            },
            {
                index: 'B',
                users: [{
                        name: 'b1',
                        tel: '23423545455'
                    },
                    {
                        name: 'b2',
                        tel: '45645632346'
                    },
                    {
                        name: 'b3',
                        tel: '68845463456'
                    },
                    {
                        name: 'b4',
                        tel: '99834554344'
                    },
                    {
                        name: 'b5',
                        tel: '88785567567'
                    },
                ]
            },
            {
                index: 'C',
                users: [{
                        name: 'c1',
                        tel: '23344234235'
                    },
                    {
                        name: 'c2',
                        tel: '3563563456'
                    },
                    {
                        name: 'c3',
                        tel: '89797685676'
                    },
                    {
                        name: 'c4',
                        tel: '77455644576'
                    },
                    {
                        name: 'c5',
                        tel: '33345352525'
                    },
                ]
            },
            {
                index: 'D',
                users: [{
                        name: 'd1',
                        tel: '18219384431'
                    },
                    {
                        name: 'd2',
                        tel: '08342152345'
                    },
                    {
                        name: 'd3',
                        tel: '43222345455'
                    },
                    {
                        name: 'd4',
                        tel: '18219384431'
                    },
                    {
                        name: 'd5',
                        tel: '52345656345'
                    },
                ]
            },
            {
                index: 'E',
                users: [{
                        name: 'e1',
                        tel: '18219384431'
                    },
                    {
                        name: 'e2',
                        tel: '33424234234'
                    },
                    {
                        name: 'e3',
                        tel: '54466663333'
                    },
                    {
                        name: 'e4',
                        tel: '18219384431'
                    },
                    {
                        name: 'e5',
                        tel: '87856567567'
                    },
                ]
            }
        ]
export default {
    data() {
        return {
            userData: userData,
            title: '通讯录',
            customTitle: '呼叫'
        }
    },
    methods: {
        backBtn() {
            console.log('back')
        },
        backIndex() {
            console.log('index')
        },
        
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
ul{
    list-style: none;
}

</style>
