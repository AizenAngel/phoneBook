<template>
  <!-- <div id="header" :style="{'position':customFixed ? 'fixed' : 'absolute'}">
                <slot name='left'></slot>
                {{customTitle}}
                <slot name='right'></slot>
            </div> -->

      <!-- //mintUI header   -->
    <mt-header fixed  :title="customTitle">
            <mt-button icon="back" slot="left">返回</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>
<script>
    export default{
        props: {
            'customTitle': {
                type: String,
                default: '标题'
            },
            'customFixed': {
                type: Boolean,
                default: true
            }
        }
    }
</script>
<style>

#header {
    height: 40px;
    line-height: 40px;
    width: 100%;
    background: #dcdcdc;
    text-align: center;
    color: #fff;
    font-size: 16px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
}

#header button {
    border: none;
}

#header button:nth-child(1) {
    float: left;
    margin: 15px 0;
    padding-left: 20px;
}

#header button:nth-child(2) {
    float: right;
    margin: 15px 0;
    padding-right: 20px;

}
</style>
