<script type="text/javascript">
    import {
        mapActions
    } from 'vuex';
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                inpt: ''
            }
        },
        created: function() {
            this.getHome.showTest = this.getHome.test
        },
        computed: {
            ...mapGetters({
                getHome: 'getHome',
                getTest: 'getTest'
            }),
            getItem: function() {
                var _finish = [];
                var items = this.getHome.test
                items.forEach(function(e, index) {
                    if (e.checkbox == true) {
                        _finish.push(e)
                    }
                })
                return _finish
            },
            getnoItem: function() {
                var _finish = [];
                var items = this.getHome.test
                items.forEach(function(e, index) {
                    if (e.checkbox == false) {
                        _finish.push(e)
                    }
                })
                return _finish
            }
        },
        watch: {
            getTest: function() {
                this.getHome.showTest = this.getTest
            }
        },
        methods: {
            ...mapActions([
                'testing',
                'additem',
                'dbl',
                'remove'
            ])
        }
    }
</script>

<template>
	<div class="div">
        <input type="text" class="form-control" id="name" v-on:keypress.enter="testing" v-model="getHome.item"/>
        <ul id="myTab" class="nav nav-tabs">
            <li class="active">
                <a href="#home" data-toggle="tab">全部任务</a>
            </li>
            <li>
                <a href="#yes" data-toggle="tab">已完成</a>
            </li>
            <li class="dropdown">
               <a href="#no" data-toggle="tab">未完成</a>
            </li>
        </ul>
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active" id="home">
                <ul class="list-group">
                    <li v-for="(items,index) in getHome.test" :class="{checkbo: items.checkbox}" class="list-group-item">
                        <div v-if="items.showInput">
                            <input type="text" @keypress.enter = "additem(index)"  v-model="getHome.newitem"/>
                        </div>
                        <div v-else>
                            <input type="checkbox" :checked="items.checkbox" @click ="items.checkbox = !items.checkbox"/>
                            <span @dblclick="dbl(index)">{{items.msg}}</span>
                            <button type="button" class="btn btn-default btn-sm" @click="remove(index)" >
                                <span class="glyphicon glyphicon-remove"></span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tab-pane fade" id="yes">
                <ul class="list-group">
                    <li v-for="(items,index) in getItem" :class="{checkbo: items.checkbox}" class="list-group-item">
                        <div v-if="items.showInput">
                            <input type="text" @keypress.enter = "additem(index)"  v-model="getHome.newitem"/>
                        </div>
                        <div v-else>
                            <input type="checkbox" :checked="items.checkbox" @click ="items.checkbox = !items.checkbox"/>
                            <span @dblclick="dbl(index)">{{items.msg}}</span>
                            <button type="button" class="btn btn-default btn-sm" @click="remove(index)" >
                                <span class="glyphicon glyphicon-remove"></span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tab-pane fade" id="no">
                <ul class="list-group">
                    <li v-for="(items,index) in getnoItem" :class="{checkbo: items.checkbox}" class="list-group-item">
                        <div v-if="items.showInput">
                            <input type="text" @keypress.enter = "additem(index)"  v-model="getHome.newitem"/>
                        </div>
                        <div v-else>
                            <input type="checkbox" :checked="items.checkbox" @click ="items.checkbox = !items.checkbox"/>
                            <span @dblclick="dbl(index)">{{items.msg}}</span>
                            <button type="button" class="btn btn-default btn-sm" @click="remove(index)" >
                                <span class="glyphicon glyphicon-remove"></span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
	</div>
</template>

<style>
    li {
        text-align: left;
    }
    
    .checkbo {
        color: red;
    }
    
    .div {
        margin: 0 auto;
        width: 50%;
    }
    
    button {
        float: right;
    }
    
    .btn-sm,
    .btn-group-sm>.btn {
        padding: 3px 5px;
        font-size: 12px;
        line-height: 1.5;
        border-radius: 3px;
    }
    
    #myTab {
        margin: 5px 0;
    }
</style>