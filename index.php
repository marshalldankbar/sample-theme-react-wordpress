<?php

get_header(); ?>

<div class="max-w-4xl mx-auto px-4">

  <!-- Sample React Wordpress Component -->
  <?php

if (is_home()) {
    // Only show the Pong game on the front page
?>
    <div id="root"></div>
<?php
}
?>

  

  <div class="prose max-w-full">
    <?php if (have_posts()) {
      while(have_posts()) {
        the_post(); ?>
        <div>
          <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
          <?php the_content(); ?>
        </div>
      <?php }
    } ?>
  </div>
</div>

<?php get_footer();