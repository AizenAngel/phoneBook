<template>
   <div id="list">
        <ul class="list_user" ref='listUser' @touchmove = 'bMove = true'>
        <li v-for='item in userData'>
        <p>{{item.index}}</p>
        <ul>
            <li v-for='user in item.users' @touchend='showTel(user.tel)'>
            {{user.name}}
            </li>
            </ul>
        </li>
        </ul>
        <ul class="list_index" ref='listIndex'>
            <li v-for='item in userIndex' @touchstart='setScroll($event)'>
            {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
 import busVM from './assets/eventBus'
 import { MessageBox } from 'mint-ui'

export default {
              props: {
                'user-data': Array,
                default: function () {
                    return []
                }
            },
            data() {
                return {
                    bMove: false
                }
            },
            computed: {
                //渲染右边list
                userIndex() {
                    return this.filterIndex(this.userData)
                }
            },
            methods: {
                //渲染右边list
                filterIndex(data) {
                    var result = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].index) {
                            result.push(data[i].index)
                        }
                    }
                    return result;
                },
                setListIndexPos() {
                    //设置右边list 动态居中
                    var iH = this.$refs.listIndex.offsetHeight;
                    this.$refs.listIndex.style.marginTop = -iH / 2 + 'px';
                },
                setScroll(ev) {
                    //根据点击的字母 来匹配list中的对应标签。然后把对应的offsetTop赋值给滚动条高度
                    var aP = this.$refs.listUser.getElementsByTagName('p');
                    for (var i = 0; i < aP.length; i++) {
                        if (aP[i].innerHTML == ev.target.innerText) {
                            document.documentElement.scrollTop = aP[i].offsetTop;
                        }
                    }
                },
                showTel(tel) {
                    // 避免滑动和点击的冲突
                    if (!this.bMove) {
                        //用$emit传递
                        busVM.$emit('changeEvent', tel)
                    } else {
                        this.bMove = false;
                    }
                }
            },
            mounted() {
                this.setListIndexPos();
            }
}
</script>
<style>
    #list{
        position: relative;
        top: 40px;
        overflow: hidden;
        overflow-y: auto;
    }
    #list .list_user p{
        background-color: #dcdcdc;
        padding-left: 10px;
    }
    #list .list_user ul  li{
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        border-bottom: 1px solid #ccc;

    }
    #list .list_index{
        position: fixed;
        right:10px ;
        top: 45%;
    }
    #list .list_index li{
        margin: 5px 0;
    }
</style>
