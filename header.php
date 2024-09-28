<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
    <?php bloginfo('name'); ?>
    <p><?php bloginfo('description'); ?></p>
    <nav>
		
    <?php wp_nav_menu(array('theme_location' => 'header-menu')); ?>
    </nav>
</header>