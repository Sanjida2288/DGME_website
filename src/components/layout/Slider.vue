<template>
    <div>
                <div id="homeslider" class="homeslider homeslidervtwo haslayout owl-carousel"
                    :style="{ backgroundImage : 'url('+require('../../assets/images/slider/img-03.jpg')+')'}">
                    <div class="item"  style=" background-size: cover;background-repeat: no-repeat;">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-10 col-lg-push-1">
                                    <div class="slidercontent">
                                        <figure class="authorimg"><img src="../../assets/images/Cover-1.png" alt="image description"></figure>
                                        <h1>Search your favourite Book</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        <!--        <carousel :items="1">-->

        <!--            <img src="../../assets/images/slider/banner-3.jpg">-->
        <!--            <img src="../../assets/images/slider/banner-3.jpg">-->

        <!--            <template slot="prev"><span class="prev"><i class="fa-3x fas fa-chevron-left"></i></span></template>-->
        <!--//-->
        <!--            <template slot="next"><span class="next"><i class="fa-3x fas fa-chevron-right"></i></span></template>-->
        <!--        </carousel>-->







    </div>
</template>

<!--<script>-->
<!--    // import carousel from 'vue-owl-carousel'-->


<!--    import $ from 'jquery'-->



<!--    export default {-->
<!--        name: "Slider",-->

<!--        components: {-->

<!--        },-->

<!--        data: {-->
<!--            items: [-->
<!--                { message: 'Foo' },-->
<!--                { message: 'Bar' },-->
<!--                { message: 'Bar2' },-->
<!--                { message: 'Bar3' },-->
<!--            ],-->
<!--            count: 0,-->
<!--            added: true-->
<!--        },-->
<!--        methods: {-->
<!--            addItem: function () {-->
<!--                this.items.push({ message: "new item " + this.count++ })-->
<!--                this.added = false;-->
<!--            }-->
<!--        },-->
<!--        updated: function () {-->
<!--            app.added = true;-->
<!--            console.log("updated")-->
<!--        },-->
<!--        directives: {-->
<!--            carousel: {-->
<!--                inserted: function (el) {-->
<!--                    $(el).owlCarousel({-->
<!--                        //loop: true,-->
<!--                        margin: 10,-->
<!--                        nav: true,-->
<!--                        responsive: {-->
<!--                            0: {-->
<!--                                items: 1-->
<!--                            },-->
<!--                            600: {-->
<!--                                items: 3-->
<!--                            }-->
<!--                        }-->
<!--                    }).trigger('to.owl.carousel', app.items.length)-->
<!--                    console.log("crousel inserted")-->
<!--                },-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<style scoped>

</style>
