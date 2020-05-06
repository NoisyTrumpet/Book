<?php
get_header();
?>
<!-- STYLES -->
<link rel="stylesheet" href="/wp-content/themes/dt-the7-child/bof-css/home.css" type="text/css">
<link rel="stylesheet" href="/wp-content/themes/dt-the7-child/turn-js/css/w3.css">
<!-- <link rel="stylesheet" href="/wp-content/themes/dt-the7-child/turn-js/css/magazine.css">
 --><!-- Bootstrap Includes -->
<!-- SCRIPTS -->

<!-- See Inside SCRIPTS -->

<!-- UPDATED JQUERY SCRIPTS -- see inside still doesn't work -->
<!-- <script type="text/javascript" src="/wp-content/themes/dt-the7-child/turn-js/extras/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="/wp-content/themes/dt-the7-child/turn-js/extras/jquery-ui.min.js"></script> -->

<!--Allows add to cart to work if commented out -->
<!-- <script type="text/javascript" src="/wp-content/themes/dt-the7-child/turn-js/extras/jquery.min.1.7.js"></script> if commented out: Cart works but button disappears, and flipbook stops working -->
<!-- <script type="text/javascript" src="/wp-content/themes/dt-the7-child/turn-js/extras/jquery-ui-1.8.20.custom.min.js"></script>  -->


<!-- <script type="text/javascript" src="/wp-content/themes/dt-the7-child/turn-js/extras/modernizr.2.5.3.min.js"></script>
<script type="text/javascript" src="/wp-content/themes/dt-the7-child/turn-js/lib/hash.js"></script> -->
<!-- <script type="text/javascript" src="/wp-content/themes/dt-the7-child/turn-js/lib/turn.js"></script>
 --><!-- See Inside SCRIPTS End -->


<!-- Savings CTA -->
<?php echo do_shortcode('[rev_slider alias="home"]') ?>
<div class="container-fluid cta">
    <h2 class="cta-text text-center">Over
        <span class="red bold">$7000
        </span> In Savings
    </h2>
</div>
<!-- HEB CTA -->
<div class="container-fluid heb">
    <!-- <h3 class="heb-text text-center">Now Featuring Exclusive
<img class="heb-logo" src="/wp-content/uploads/2019/03/HEB-Logo.png"> Offers
</h3> -->
    <h3 class="products-deals-title text-center">Products & Deals</h3>
</div>
<?php
$args = array(
	'post_type' => 'product',
	'posts_per_page' => 5,
	'orderby' => 'menu_order',
	'order' => 'ASC',
); // Argument Array
?>
<?php
$loop = new WP_Query($args); // Initialize Product Loop
?>
<?php
global $product; // Global Product Var
?>
<?php while ($loop->have_posts()):
	$loop->the_post(); // Start Loop
	?>
<?php // Availability Vars
	$avail = $product->get_availability();
	$class = $avail['class'];
	$title = $product->get_title($loop->post->ID);
	?>
<!-- Products -->
<div class="container product-wrapper">
    <div class="row product">
        <!-- Product Image -->
        <div class="col-xs-12 col-sm-12 col-md-4">
            <a href="<?php
	echo get_permalink($loop->post->ID);
	?>" title="<?php
	echo esc_attr($loop->post->post_title ? $loop->post->post_title : $loop->post->ID);
	?>">
                <?php
	if (has_post_thumbnail($loop->post->ID)) {
		echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog');
	} else {
		// If no product image -> set placeholder
		echo '<img src="' . woocommerce_placeholder_img_src() . '" alt="Placeholder" width="300px" height="300px" />';
	}
	?>
            </a>
        </div>
        <!-- Product Info & Buttons -->
        <div class="col-xs-12 col-sm-12 col-md-8" style="margin: auto;">
            <!-- Product Title & Price-->
            <div class="price-title">
                <?php
	the_title('<h5 class="title" style="text-align: left;">', '</h5>');
	?>

                <!-- NOT on Sale -->
                <!-- <div style="float: right; text-align: right;">
										<?php
	// echo '<span class="price">' . $product->get_price_html() . '</span>';
	?>
										</div> -->

                <!-- ON Sale -->
                <div style="float: right; text-align: right;">
                    <?php
	echo '<span class="price">$' . $product->get_sale_price() . '</span><br/>';
	echo '<span class="salePrice">$' . $product->get_regular_price() . '</span>';
	?>
                </div>

            </div>
            <div class="availability" style="margin: 1.5rem auto;">
                <?php
	echo '<h5 class="stock">' . $class . '</h5>';
	?>
            </div>
            <div class="meta-info" style="margin-bottom: 1.5rem;">
                <?php
	echo apply_filters('woocommerce_short_description', $post->post_excerpt);
	?>
            </div>

            <!-- Quanitity & Buttons -->
            <div class="buttons">
                <!-- <button type="button" class="single_add_to_cart_button add_to_cart_button product_type_simple button alt" id="see-inside" data-toggle="modal" data-target="#myModal" onclick="openModal();">
																	See Inside!
																	</button> -->
                <?php
	if (!in_array($product->product_type, array(
	'variable',
	'grouped',
	'external',
))) {
		// only if can be purchased
		if ($product->is_purchasable()) {
			// show qty +/- with button
			ob_start();
			woocommerce_simple_add_to_cart();
			$button = ob_get_clean();
			// modify button so that AJAX add-to-cart script finds it
			$replacement = sprintf('data-product_id="%d" data-quantity="1" $1 add_to_cart_button product_type_simple ', $product->id);
			$button = preg_replace('/(class="single_add_to_cart_button)/', $replacement, $button);
		}
	}
// output the button
	?>
                <?php
	echo $button;
	?>

            </div> <!-- button end -->
        </div> <!-- col end -->
    </div> <!-- row end -->
</div> <!-- product-wrapper end -->

<div id="myModal" class="w3-modal w3-black" style="z-index: 500">
    
    <span class="w3-text-white w3-xxlarge w3-hover-text-grey w3-container w3-display-topright bookClose"
        onclick="closeModal()" style="">X</span>

    <div class="w3-modal-content" style="margin-top: 2rem; background-color: transparent;">

        <div class="w3-content" style="background-color: #333; max-width: 100%!important">

            <?php echo do_shortcode('[book]'); ?>

        </div> <!-- End w3-content -->

    </div> <!-- End modal content -->
</div> <!-- End modal -->




<?php
endwhile; // End Loop
?>

<?php
wp_reset_query();
?>
<?php echo do_shortcode('[book]'); ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="js/captcha/jquery.clientsidecaptcha.js" type="text/javascript"></script>
<script type="text/javascript">

function simulateKeyPress(character) {
    jQuery.event.trigger({ type : 'keypress'm which : character.charCodeAt(0) });
}


function next() {
    document.getElementByClassName("magazine").turn("next");
}

function prev() {
    document.getElementByClassName("magazine").turn("previous");
}


function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

</script>


<style>

    .w3-black {
        background-color: #333 !important;
    }
.salePrice {
    color: red;
    font-size: 20px;
    text-decoration: line-through;
}

.modal-backdrop {
    display: none;
}


.bookClose {
    /*	position: relative;*/
    cursor: pointer;
    margin-top: 50px;
    text-align: right;
}
</style>


<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>

<?php
get_footer();
?>

