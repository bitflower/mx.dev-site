import { Component, h, Host } from '@stencil/core';

const svg: string = `
<svg width="742px" height="186px" viewBox="0 0 742 186" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="group">
            <g id="funnel">
                <g id="word-bubble" stroke-width="1" fill-rule="evenodd" transform="translate(1.000000, 13.000000)" font-family="Montserrat-Bold, Montserrat" font-size="16" font-weight="bold">
                    <text id="NEEDS" fill="#7510F7">
                        <tspan x="57.284" y="110">NEEDS</tspan>
                    </text>
                    <text id="IDEAS" fill="#7510F7">
                        <tspan x="296.468" y="15">IDEAS</tspan>
                    </text>
                    <text id="GOALS" fill="#7510F7">
                        <tspan x="225.452" y="142">GOALS</tspan>
                    </text>
                    <text id="MARKET" fill="#7510F7">
                        <tspan x="259.316" y="77">MARKET</tspan>
                    </text>
                    <text id="DESIGN" fill="#7510F7">
                        <tspan x="4.352" y="24">DESIGN</tspan>
                    </text>
                    <text id="UX" fill="#7510F7">
                        <tspan x="0.432" y="88">UX</tspan>
                    </text>
                    <text id="TECHNOLOGY" fill="#7510F7">
                        <tspan x="116.46" y="48">TECHNOLOGY</tspan>
                    </text>
                </g>
                <g id="all-technologies" stroke-width="1" fill-rule="evenodd" transform="translate(-123.000000, 26.000000)" stroke="#00FFF4" stroke-linecap="round" stroke-linejoin="round">
                    <g id="technologies" fill-rule="nonzero" opacity="0.15" stroke-width="2">
                        <path d="M0,0.1 C81.1945321,0.1 121.791798,0.1 121.791798,0.1" id="16"></path>
                        <path d="M0,6.1 C81.1945321,6.1 121.791798,6.1 121.791798,6.1" id="15"></path>
                        <path d="M0,30.1 C81.1945321,30.1 121.791798,30.1 121.791798,30.1" id="14"></path>
                        <path d="M0,38.1 C81.1945321,38.1 121.791798,38.1 121.791798,38.1" id="13"></path>
                        <path d="M0,20.1 C81.1945321,20.1 121.791798,20.1 121.791798,20.1" id="12"></path>
                        <path d="M0,26.1 C81.1945321,26.1 121.791798,26.1 121.791798,26.1" id="11"></path>
                        <path d="M0,52.1 C81.1945321,52.1 121.791798,52.1 121.791798,52.1" id="10"></path>
                        <path d="M0,56.1 C81.1945321,56.1 121.791798,56.1 121.791798,56.1" id="9"></path>
                        <path d="M0,84.1 C81.1945321,84.1 121.791798,84.1 121.791798,84.1" id="8"></path>
                        <path d="M0,95.1 C81.1945321,95.1 121.791798,95.1 121.791798,95.1" id="7"></path>
                        <path d="M0,121.1 C81.1945321,121.1 121.791798,121.1 121.791798,121.1" id="6"></path>
                        <path d="M0,124.1 C81.1945321,124.1 121.791798,124.1 121.791798,124.1" id="5"></path>
                        <path d="M0,107.1 C81.1945321,107.1 121.791798,107.1 121.791798,107.1" id="4"></path>
                        <path d="M0,116.1 C81.1945321,116.1 121.791798,116.1 121.791798,116.1" id="3"></path>
                        <path d="M0,140.1 C81.1945321,140.1 121.791798,140.1 121.791798,140.1" id="2"></path>
                        <path d="M0,146.1 C38.7799032,146.1 64.0678247,146.1 75.8637645,146.1 C87.0771154,146.1 95.240504,146.1 100.35393,146.1 C114.645842,146.1 121.791798,146.1 121.791798,146.1" id="1"></path>
                    </g>
                    <g id="selected-technologies" transform="translate(125.000000, 7.000000)" fill-rule="nonzero" stroke-width="3">
                        <path d="M56,94.625 L113.484341,94.625" id="6"></path>
                        <path d="M224,127.625 L281.484341,127.625" id="7"></path>
                        <path d="M0,73.125 L23.8858905,73.125" id="5"></path>
                        <path d="M113,34.525 C214.333333,34.525 251.852512,34.525 225.557536,34.525" id="4"></path>
                        <path d="M293.5,1.125 C331.166667,1.125 350,1.125 350,1.125" id="3"></path>
                        <path d="M5,10.125 L66.5,10.125" id="2"></path>
                        <path d="M259.5,62.125 C305.833333,62.125 329,62.125 329,62.125" id="1"></path>
                    </g>
                </g>
                <rect id="hide-lines" fill="#FFFFFF" fill-rule="nonzero" x="360" y="0" width="382" height="186"></rect>
                <path d="M504.026312,111.426982 C504.733984,111.062794 505.51837,110.872802 506.314254,110.872802 L537.5,110.872802 C538.604569,110.872802 539.5,109.977372 539.5,108.872802 L539.5,80.6952929 C539.5,79.5907234 538.604569,78.6952929 537.5,78.6952929 L506.361457,78.6952929 C505.522606,78.6952929 504.697236,78.4842429 503.961349,78.0815763 L364.460043,1.7485723 C364.165688,1.58750566 363.83554,1.50308566 363.5,1.50308566 C362.395431,1.50308566 361.5,2.39851616 361.5,3.50308566 L361.5,181.496391 C361.5,181.814744 361.575997,182.128499 361.721672,182.411567 C362.22711,183.393711 363.433033,183.780157 364.415177,183.274719 L504.026312,111.426982 Z" id="funnel-layer" stroke="#7510F7" stroke-width="3" fill-rule="nonzero"></path>
                <path d="M612.5,127.5 C628.81813,127.5 654.878669,132.564861 666.5,127.5 C681.23126,121.079755 681.5,112.30557 681.5,101.5 C681.5,82.1700338 646.003078,63.5 609,63.5 C596.302587,63.5 581.077146,66.5684602 571.5,69 C553.167219,73.6545067 552,82.8030106 552,95.5 C552,114.829966 575.496922,127.5 612.5,127.5 Z" id="value-bubble" fill="#7510F7" fill-rule="nonzero"></path>
                <text id="VALUE" font-family="Montserrat-Bold, Montserrat" font-size="24" font-weight="bold" fill="#FFFFFF">
                    <tspan x="576.324" y="102">VALUE</tspan>
                </text>
                <path d="M654,74 L698,36" id="anchor" stroke="#7510F7" stroke-width="1" stroke-linecap="square" fill-rule="nonzero"></path>
                <text id="Your-digital-product" font-family="Montserrat-Regular, Montserrat" font-size="14" font-weight="normal" fill="#7510F7">
                    <tspan x="598.119" y="32">Your digital product</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>
`;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  render() {
    return (
      <Host>
        <ion-content>
          <mm-header />
          <section class='vh50 bg-light-base hero color-dark-base'>
            <div class='content'>
              <div class='manifest'>
                <div class='illustration' innerHTML={svg} />
                {/* <h1>
                  „Focus on the <span class='value'>value</span> and everything
                  else will fall into place.
                </h1> */}
              </div>
            </div>
          </section>
          <section class='bg-primary-base matt color-light-shade'>
            <div class='content padding-side-3 text-center padding-bm-22'>
              <h2>Hi, I'm Matthias. Great to meet you.</h2>
              {/* <p>Ever since Technology drives value creation</p> */}
              <p>
                Using technology to create business value is crucial. The
                leverage it provides is essential and company owners have to
                re-align their business models around it. Nevertheless, the
                challenges to utilize it effectively are growing.
              </p>
              <p>
                A continuous stream of aspects must be considered, evaluated and
                continuously implemented. Building digital products is not a
                static task - it's a method, a mindset, a culture.
              </p>
              {/* <p>
                Building digital products is not a static task. It's a
                continuous stream of aspects to be considered, evaluated and
                implemented. Using technology for our business needs is crucial.
                But technology is developing rapidly and is sometimes hard to
                keep up pace with.
              </p> */}
              <p>
                I help companies to harness web technologies to their
                competitive advantage and create unique business value.
              </p>
              {/* <p>
                I help companies to leverage web technologies to their advantage
                and create real business value.
              </p> */}
              {/* <p>
                For the last 5 years I’ve been building enterprise application
                for large corporations. Happily switching between requirements
                engineering, UI and UX work, architecture. I like working with
                talented people because I strongly believe that great value
                comes from interdisciplinary collaboration.
              </p>
              <p>
                In the past I've been a professional songwriter and music label
                founder with international platin and gold records on my track
                record.
              </p>
              <p>
                Value on a larger scale is almost always the sum of small added
                values. That's why I try to remember that LEGO blocks can also
                be disassembled - which sometimes is the right thing to do to
                make progress. Stick to real-world values will almost always
                lead to the right decisions - both technical and economical.
              </p> */}
            </div>
          </section>
          <section class='vh50 bg-light-base'>
            <div class='content wide overlap'>
              <div class='bg-light-base box overlap-container'>
                <h2>More ...</h2>
                <p>
                  Since beginning my journey as a freelance designer nearly 8
                  years ago, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products for both business and consumer use. I'm
                  quietly confident, naturally curious, and perpetually working
                  on improving my chops one design problem at a time.
                </p>
              </div>
            </div>
          </section>
          {/* <mm-bricks /> */}
        </ion-content>
      </Host>
    );
  }
}
