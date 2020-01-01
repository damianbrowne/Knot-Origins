<?php
  // To make sure we don't need to create the header section of the website on multiple pages, we instead create the header HTML markup in a separate file which we then attach to the top of every HTML page on our website. In this way if we need to make a small change to our header we just need to do it in one place. This is a VERY cool feature in PHP!
  require "header.php";
?>

    <main>
      <div id="wrapper">
            <!-- LOADING -->
            <div id="loading" style="display:none;">
              <h1>Loading...</h1>
              <img src="https://media.giphy.com/media/137uPqnSre7ORq/giphy.gif">
            </div>

            <!-- LOBBY -->
            <div id="lobby-container">

              <div id="logo" class="fant-font">
                <img src="./assets/images/knotlogo.png">
                <p>[ LOBBY ]</p>
              </div>
              <br/>
                <div id="lobby-options">
                <h2>Origins of K'Not</h2>
                <hr/>
                <br/>
                <p>
                  After the outbreak, a builder and trapper try to survive and find a cure to K'notosis.
                  Play as either or both of these characters yourself and try to find a cure while surviving the zombie onslought in this top-down 2D survival game!
                </p>
                <br/>
                <a href="./patchnotes.html" target="_blank">Patch Notes</a>
                <a href="./highscores.php" target="_blank">Highscores</a>
                <br/>
                <br/>
                <h2>Prepare Your Adventure</h2>
                <hr/>
                <br/>
                <p>Configure your game settings below. When you are ready, click the K'norigins! button at the bottom.</p>
                <br/>

                <p><b>Choose One or Two Players:</b> Play alone, or play with a friend!</p>
                <div id="character-grid" class='fant-font'>
                  <input type='radio' name='player-select' value='one' id="player-1" checked="checked"/>
                  <label for="player-1" class="tooltip">
                    <span class='tooltiptext'>
                      Controlled with arrow keys and p-l-;-'
                    </span>
                  </label>
                  <input type='radio' name='player-select' value='two' id="player-2"/>
                  <label for="player-2" class="tooltip">
                    <span class='tooltiptext'>
                      Controlled with w-a-s-d and t-f-g-h
                    </span>
                  </label>
                </div>
                <br/>

                <p><b>Choose a Character:</b> your character will have a special ability to fend off the hordes.</p>
                <div id="character-grid">
                  <input type='radio' name='char-select' value='builder' id="char-builder" checked="checked"/>
                  <label for="char-builder" id="builder-sqr" style="border: 4px solid red;" class="tooltip">
                    <span class='tooltiptext'>
                      Builds and destroys walls
                    </span>
                  </label>
                  <input type='radio' name='char-select' value='trapper' id="char-trapper"/>
                  <label for="char-trapper" id="trapper-sqr" class="hidden-p tooltip" style="border: 4px solid black;">
                    <span class="tooltiptext">
                      Places traps to kill zombies
                    </span>
                  </label>
                </div>
                <div id="hidden-div-1">
                  <b  id="player-1-indicator"   style=" display: inline; border: 3px solid red; margin-left: 25px;">P1</b>
                  <b  id="player-2-indicator"   style=" display: none; border: 3px solid blue; margin-left: 55px;">P2</b>
                </div>
                <div id="hidden-div-2" class="hidden-div">
                  <b  id="second-player-indicator"   style=" display: none; border: 3px solid blue; margin-left: 25px;"/>P2</b>
                  <b  id="first-player-indicator"   style=" display: none; border: 3px solid red; margin-left: 55px;"/>P1</b>
                </div>
                <p></p>
                <br/>

                <p><b>Choose a Difficulty:</b> higher difficulty means more zombies that bite harder and faster!</p>
                <div id="character-grid" class='fant-font'>
                  <input type='radio' name='diff-select' value='easy' id="diff-trivial"/>
                  <label for="diff-trivial" class="tooltip">
                    <span class="tooltiptext">
                      Easy
                    </span>
                  </label>
                  <input type='radio' name='diff-select' value='medium' id="diff-tolerable" checked="checked"/>
                  <label for="diff-tolerable" class="tooltip">
                    <span class="tooltiptext">
                      Medium
                    </span>
                  </label>
                  <input type='radio' name='diff-select' value='hard' id="diff-terrible"/>
                  <label for="diff-terrible" class="tooltip">
                    <span class="tooltiptext">
                      Hard
                    </span>
                  </label>
                </div>
                <br/>
                <hr/>
                <br/>

                <div id="config-launch-holder">
                  <button id="config-launch" class='fant-font'>K'norigins Awaits...</button>
                </div>
              </div>

            <!-- End lobby -->
            </div>


            <!-- GAME -->
            <div id="game-container" class='fant-font' style="display: none;">

              <div id="health-cont">
                <p>P1 HEALTH</p>
                <progress id="game-health" max="100" value="100"></progress>
              </div>
              <div id="health-cont-player-2">
                <p id="P2-health">P2 HEALTH</p>
                <progress id="game-health-player-2" max="100" value="100"></progress>
              </div>
              <div id="round-cont">
                <h2>Round</h2>
                <h2 id="game-round">1</h2>
                <br/>
                <h2>Score</h2>
                <h2 id="game-score">0</h2>
              </div>
              <div id="survive-cont">
                <p>SURVIVE</p>
                <progress id="game-timer" max="100" value="100"></progress>
              </div>
              <!-- find the cure -->
              <div id="cure-cont">
                <p>CURE PROGRESS</p>
                <progress id="game-cure" max="100" value="0"></progress>
              </div>

              <div id="game-maze"></div>

              <div>
                <form hidden="hidden" id="highscore-form" action="./php/new_score.php" method="POST">
                  <input name='username' value='NULL'>
                  <input name='final-score' value='null'>
                </form>
              </div>

        <!-- End game -->
        </div>
      <!-- End Wrapper -->
      </div>
    </main>

<?php
  // And just like we include the header from a separate file, we do the same with the footer.
  require "footer.php";
?>
