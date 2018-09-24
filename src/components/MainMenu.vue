<template>
  <div id="menu-view" :class="isMobile ? 'mobile' : 'desktop'">
    <header>
      <nav>
        <ul class="top-links">
          <li class="top-link"><a href="#">home</a></li>
          <li class="top-link"><a href="#">about</a></li>
          <li class="top-link"><a href="#">projects</a></li>
          <li class="top-link"><a href="#">contact</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <font-awesome-icon icon="code" class="main-icon"></font-awesome-icon>
    </section>
    <footer>
      <nav>
        <ul class="bot-links">
          <li class="bot-link">
            <a href="https://github.com/kimlisa" target="_blank">
              <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="bot-link-icon">
              </font-awesome-icon>
              <span v-show="isMobile">GitHub</span>
            </a>
          </li>
          <li class="bot-link">
            <a href="https://www.linkedin.com/in/kim-lisa/" target="_blank">
              <font-awesome-layers>
                <font-awesome-icon
                    icon="circle"
                    class="bot-link-icon">
                </font-awesome-icon>
                <font-awesome-icon
                    :icon="['fab', 'linkedin-in']"
                    class="bot-link-icon-inner-1"
                    transform="right-5">
                </font-awesome-icon>
              </font-awesome-layers>
              <span v-show="isMobile">LinkedIn</span>
            </a>
          </li>
          <li class="bot-link">
            <a href="#" target="_blank">
              <font-awesome-layers>
                <font-awesome-icon
                    icon="circle"
                    class="bot-link-icon">
                </font-awesome-icon>
                <font-awesome-icon
                    icon="file-alt"
                    class="bot-link-icon-inner-1"
                    transform="right-6">
                </font-awesome-icon>
              </font-awesome-layers>
              <span v-show="isMobile">Resume</span>
            </a>
          </li>
        </ul>
      </nav>
      <p>2018 &copy; by Lisa Kim</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  components: {},
  mixins: [],
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
    isDesktop: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    test: '',
  }),
  computed: {

  },
  created() {
    console.log('hello mainmenu');
  },
  methods: {
  },
};
</script>

<style scope>
#menu-view {
  background: #363636;
  color: #fff;
  text-align: center;
  width: 40%;
  position: relative;
}


#menu-view section {
  align-items: center;
  display: flex;
  height: 75%;
  justify-content: center;
}


#menu-view footer {
  color: #A5A5A5;
  letter-spacing: .08em;
  font-size: .75em;
  font-weight: 100;
}


.bot-link-icon-inner-1 {
  color: #363636;
  font-size: 32px;
}


.bot-link-icon {
  font-size: 48px;
}


.fa-layers {
  display:flex;
  margin-right: 30px;
  top: -12px;
}


.main-icon {
  color: #9F9F9F;
  font-size: 160px;
}


#menu-view a {
  color: #fff;
  text-decoration: none;
}


.desktop nav {
  width: 100%;
}


.desktop ul {
  padding: 0;
}


.desktop nav li {
  display: inline-block;
  margin: 0 20px;
}
</style>
