<template>
    <div id="alert" ref='alertBox'>
        <div class="alert_content">
            <div class="alert_title">{{customTitle}}</div>
            <div class="alert_body">{{telNumber}}</div>
            <div class="alert_button">
            <mt-button type="primary" size='small' @touchstart.native='confirmBtn'>确认</mt-button>
            <mt-button type="danger" size='small' @touchstart.native='cancelBtn($event)'>取消</mt-button>
            </div> 
        </div>
    </div>
</template>
<script>
//引入空实例作为中间通信桥梁
import busVM from './assets/eventBus'
export default {
        props: {
        'customTitle': String,
        default: '呼叫'
    },
    data() {
        return {
            telNumber: ''
        }
    },
    mounted() {
        //用$on来接收
        busVM.$on('changeEvent', (tel) => {
            this.telNumber = tel;
            this.$refs.alertBox.style.display = 'block';
        })
    },
    methods:{
        confirmBtn() {},
        cancelBtn(ev) {
            // $el 表示最外层容器
            this.$el.style.display = 'none';
        }
    }
}
</script>
<style>
    #alert{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0,0, 0.3);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 20;
        display: flex;

    }
    #alert .alert_content{
        width: 200px;
        height: 150px;
        padding: 5px;
        background: #fff;
        border-radius: 4px;
        margin: 210px auto;
        position: relative;
    }
    #alert .alert_title{
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    #alert .alert_body{
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    #alert .alert_button{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    #alert .alert_button button{
        margin: 10px;
    }
</style>
