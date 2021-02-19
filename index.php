<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
  <title>Job Listings</title>
</head>
<body>
  <?php 
  $data = file_get_contents("src/data.json");
  $elements = json_decode($data, true);
  ?>
  <div class="header-background">
  </div>
  <header class="site-header">
    <div class="filter-bar" id="filter-bar">
    <div class="container hide">
      <div class="tagsContainer">
        <div class="sectionContainer" id="roleContainer"></div>
        <div class="sectionContainer" id="levelContainer"></div>
        <div class="sectionContainer" id="languageContainer"></div>
        <div class="sectionContainer" id="toolContainer"></div>
      </div>

    </div>

    </div>

    </div>
  </header>
  <section class="grid">
    <div class="grid-container container">
      <?php foreach ($elements as $element) { ?>
        <?php 
          $languages = $element['languages'];
          $tools = $element['tools'];
        ?>
        <div 
          class="grid-element <?php if ($element['featured']==true) {
            echo "featured";
          }?>" 
          id = "<?php echo ($element['id']);?>" 
          data-role="<?php echo strtolower($element['role']);?>" 
          data-level="<?php echo strtolower($element['level']);?>" 
          data-languages="<?php foreach ($languages as $language) {
            if ($language==$languages[count($languages)-1]) {
              echo strtolower($language);
            }
            else{
              echo strtolower($language." ");
            }
          }?>" 
          data-tools="<?php foreach ($tools as $tool) {
            if ($tool==$tools[count($tools)-1]) {
              echo strtolower($tool);
            }
            else{
              echo strtolower($tool." ");
            }
          }?>"
          >
          <div class="details-container">
            <div class="img-container">
              <img src="<?php echo $element['logo'];?> " alt="">
            </div>
           <div class="details-content">
              <div class="company-container">
                <p class="company"><?php echo $element['company'];?></p>
                <?php if ($element['new']==true || $element['featured']) { ?>
                  <div class="pops">
                    <?php if ($element['new']==true) {
                      echo '<span class="pop new-pop">';
                      echo 'New!';
                      echo '</span>';
                    }?>
                    <?php if ($element['featured']==true) {
                      echo '<span class="pop featured-pop">';
                      echo 'Featured';
                      echo '</span>';
                    }?>
                  </div>
                  <?php }?>
              </div><!--company container-->
              <div class="tittle">
                <a href="#"><h1><?php echo $element['position'];?></h1></a>
              </div>
              <div class="date">
                <ul>
                  <li>· <?php echo $element['postedAt'];?></li>
                  <li>· <?php echo $element['contract'];?></li>
                  <li>· <?php echo $element['location'];?></li>
                </ul>
              </div>
           </div><!--details-content-->
          </div><!--Details container-->
          <div class="tags-container">
            <?php 
              $tags = [
                "role" => $element['role'],
                "level" => $element['level'],
                "languages" => $languages,
                "tools" => $tools
              ];
            ?>
            <?php foreach ($tags as $key => $tag) {
              if (gettype($tag)=="array") {
                foreach ($tag as $value) { ?>
                  <p class="tag" data-tagType="<?php echo strtolower($key); ?>"> <?php echo $value; ?> </p>
                <?php }
              }
              else{ ?>
                  <p class="tag" data-tagType="<?php echo strtolower($key); ?>"> <?php echo $tag; ?> </p>
              <?php }
            }?>
          </div>
        </div><!--Grid element-->
      <?php }?>
    </div><!--Grid copntainer-->
  </section>
  
<script src="js/main.js"></script>
</body>
</html>