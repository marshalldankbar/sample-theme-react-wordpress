<?php

/**
 * Enqueue scripts and styles for the theme.
 */
function boilerplate_load_assets() {
    wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
    wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}
add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

/**
 * Enqueue React and ReactDOM only on the home page, along with the Pong game script.
 */
function enqueue_react_pong() {
    wp_enqueue_script('react', 'https://unpkg.com/react@17/umd/react.production.min.js', array(), '17.0.0', true);
    wp_enqueue_script('react-dom', 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js', array('react'), '17.0.0', true);

  
}
add_action('wp_enqueue_scripts', 'enqueue_react_pong');

/**
 * Add theme support for various features.
 */
function boilerplate_add_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'boilerplate_add_support');

/**
 * Register theme menus.
 */
function register_theme_menus() {
    register_nav_menus(array(
        'header-menu' => __('Header Menu', 'textdomain')
    ));
}
add_action('init', 'register_theme_menus');
