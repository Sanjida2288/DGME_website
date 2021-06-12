<template>
    <div>
        <header id="bg-header" class="bg-header haslayout">
            <div class="middlecontainer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="row">
                                <div class="col-lg-3">
                                    <strong class="bg-logo"><a href="3"><img src="#" alt="logo here"></a></strong>
                                </div>
                                <div class="col-lg-6">
                                    <div class="searchbox">
                                        <form class="bg-theme formsearch">
                                            <fieldset>
                                                <input type="text" name="search" class="typeahead form-control" placeholder="Search ...">
                                                <button type="submit"><i class="icon-magnifier"></i></button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="userlogin dropdown  ">
                                        <a href="#"><i class="fas fa-lock"></i>  LogIn</a>
                                        <!-- <figure><a href="#"><img src="images/users/img-01.jpg" alt="image description"></a></figure>
                                        <span class="allbutton-btnthemedropdown2" id="tg-logout" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hi, Melonie</span>
                                        <ul class="dropdown-menu tg-themedropdownmenu2" aria-labelledby="tg-logout">
                                            <li>
                                                <a href="#">
                                                    <span>Logout</span>
                                                </a>
                                            </li>

                                        </ul> -->
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="navigationarea">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <nav id="bg-nav" class="bg-nav">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <div id="navigation" class="collapse navbar-collapse navigation">
                                    <ul>
                                        <li class="menu-item-has-children menu-item-has-mega-menu">
                                            <a href="javascript:void(0);">All Categories</a>
                                            <div class="mega-menu">
                                                <ul class="themetabnav" role="tablist">
                                                    <li role="presentation" class="active">
                                                        <a href="#Anatomy" aria-controls="Anatomy" role="tab" data-toggle="tab">Anatomy</a>
                                                    </li>
                                                    <li role="presentation">
                                                        <a href="#Biochemistry" aria-controls="Biochemistry" role="tab" data-toggle="tab">Biochemistry</a>
                                                    </li>
                                                    <li role="presentation">
                                                        <a href="#Surgery" aria-controls="Surgery" role="tab" data-toggle="tab">Surgery</a>
                                                    </li>
                                                    <li role="presentation">
                                                        <a href="#Medicine" aria-controls="Medicine" role="tab" data-toggle="tab">Medicine</a>
                                                    </li>

                                                </ul>

                                            </div>
                                        </li>
                                        <li class=""><a href="index.html">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li class="menu-item-has-children">
                                            <a href="javascript:void(0);">Authors</a>
                                            <ul class="sub-menu">
                                                <li><a href="#">Authors</a></li>
                                                <li><a href="#">Author Detail</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Contact</a></li>
                                        <!-- <li class="menu-item-has-children current-menu-item">
                                            <a href="javascript:void(0);"><i class="icon-menu"></i></a>

                                        </li> -->
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>

</style>
