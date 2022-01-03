/** * @name CreditTag * @version 0.1.0 * @description Credit tag for open source projects * @author 
Peter Butcher (ProbitSnowman) <pbutcher93[at]gmail[dot]com> **/ function CreditTag(data) {
  // Credit tag version
  this.version = '0.1.0';
  // User data object
  this.data = data;
  // Credit tag positioning
  this.position = { ...data.position };
  // Credit tag accounts
  this.accounts = { ...data.accounts };
  // Icon colour
  this.iconColour = data.colour;
  // Root attachment
  this.root = document.createElement('div');
  this.root.setAttribute('class', this.data.el);
  // Service URLs
  this.URLs = {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
  }
  // Account URLs
  this.accountURLs = {};
  Object.keys(this.accounts).forEach((el, i, arr) => {
    this.accountURLs[el] = this.URLs[el] + this.accounts[el];
  });
  // Twitter and Github SVGs
  this.SVGs = {
    "twitter": {
          "white": `<svg width="20px" height="20px" viewBox="0 0 1042 850" version="1.1" 
xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" 
style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g 
transform="matrix(4.16667,0,0,4.16667,0,0)"><g transform="matrix(1,0,0,1,-75,-98.4521)"><path 
d="M153.62,301.59C247.96,301.59 299.56,223.43 299.56,155.65C299.56,153.43 299.56,151.22 
299.41,149.02C309.448,141.759 318.114,132.769 325,122.47C315.639,126.618 305.708,129.338 
295.54,130.54C306.245,124.132 314.262,114.045 318.09,102.17C308.022,108.144 297.006,112.355 
285.52,114.62C275.822,104.307 262.277,98.452 248.121,98.452C219.956,98.452 196.781,121.628 
196.781,149.792C196.781,153.699 197.227,157.594 198.11,161.4C156.89,159.334 118.432,139.837 
92.4,107.81C78.863,131.114 85.867,161.314 108.28,176.28C100.118,176.038 92.132,173.836 
85,169.86C85,170.07 85,170.29 85,170.51C85.007,194.833 102.308,215.974 126.15,220.79C118.599,222.849 
110.675,223.15 102.99,221.67C109.693,242.512 129.021,256.879 150.91,257.29C132.751,271.561 
110.306,279.313 87.21,279.29C83.129,279.282 79.052,279.035 75,278.55C98.454,293.601 125.752,301.587 
153.62,301.55" style="fill:white;fill-rule:nonzero;"/></g></g></svg>`,
          "black": `<svg width="20px" height="20px" viewBox="0 0 1042 850" version="1.1" 
xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" 
style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g 
transform="matrix(4.16667,0,0,4.16667,0,0)"><g transform="matrix(1,0,0,1,-75,-98.4521)"><path 
d="M153.62,301.59C247.96,301.59 299.56,223.43 299.56,155.65C299.56,153.43 299.56,151.22 
299.41,149.02C309.448,141.759 318.114,132.769 325,122.47C315.639,126.618 305.708,129.338 
295.54,130.54C306.245,124.132 314.262,114.045 318.09,102.17C308.022,108.144 297.006,112.355 
285.52,114.62C275.822,104.307 262.277,98.452 248.121,98.452C219.956,98.452 196.781,121.628 
196.781,149.792C196.781,153.699 197.227,157.594 198.11,161.4C156.89,159.334 118.432,139.837 
92.4,107.81C78.863,131.114 85.867,161.314 108.28,176.28C100.118,176.038 92.132,173.836 
85,169.86C85,170.07 85,170.29 85,170.51C85.007,194.833 102.308,215.974 126.15,220.79C118.599,222.849 
110.675,223.15 102.99,221.67C109.693,242.512 129.021,256.879 150.91,257.29C132.751,271.561 
110.306,279.313 87.21,279.29C83.129,279.282 79.052,279.035 75,278.55C98.454,293.601 125.752,301.587 
153.62,301.55" style="fill-rule:nonzero;"/></g></g></svg>`
    },
    "github": {
          "black": `<svg width="20px" height="20px" viewBox="0 0 834 817" version="1.1" 
xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" 
style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g 
transform="matrix(4.16667,0,0,4.16667,0,0)"><g 
transform="matrix(6.13892,0,0,6.13892,-836.86,-659.57)"><path d="M152.608,107.441C143.613,107.441 
136.32,114.734 136.32,123.731C136.32,130.928 140.987,137.033 147.46,139.188C148.275,139.337 
148.572,138.834 148.572,138.402C148.572,138.016 148.558,136.991 148.55,135.632C144.019,136.616 
143.063,133.448 143.063,133.448C142.322,131.567 141.254,131.066 141.254,131.066C139.775,130.055 
141.366,130.075 141.366,130.075C143.001,130.191 143.861,131.754 143.861,131.754C145.314,134.243 
147.674,133.524 148.602,133.108C148.75,132.055 149.17,131.337 149.636,130.93C146.019,130.519 
142.216,129.121 142.216,122.879C142.216,121.101 142.851,119.647 143.893,118.508C143.725,118.096 
143.166,116.44 144.052,114.197C144.052,114.197 145.42,113.759 148.532,115.867C149.831,115.506 
151.225,115.325 152.61,115.319C153.993,115.325 155.387,115.506 156.688,115.867C159.798,113.759 
161.163,114.197 161.163,114.197C162.052,116.44 161.493,118.096 161.325,118.508C162.369,119.647 
163,121.101 163,122.879C163,129.137 159.191,130.514 155.562,130.917C156.147,131.42 156.668,132.414 
156.668,133.934C156.668,136.111 156.648,137.868 156.648,138.402C156.648,138.838 156.941,139.345 
157.768,139.186C164.236,137.027 168.899,130.926 168.899,123.731C168.899,114.734 161.605,107.441 
152.608,107.441" style="fill:rgb(24,23,23);"/></g></g></svg>`,
          "white": `<svg width="20px" height="20px" viewBox="0 0 834 817" version="1.1" 
xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" 
style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g 
transform="matrix(4.16667,0,0,4.16667,0,0)"><g 
transform="matrix(6.13892,0,0,6.13892,-836.86,-659.57)"><path d="M152.608,107.441C143.613,107.441 
136.32,114.734 136.32,123.731C136.32,130.928 140.987,137.033 147.46,139.188C148.275,139.337 
148.572,138.834 148.572,138.402C148.572,138.016 148.558,136.991 148.55,135.632C144.019,136.616 
143.063,133.448 143.063,133.448C142.322,131.567 141.254,131.066 141.254,131.066C139.775,130.055 
141.366,130.075 141.366,130.075C143.001,130.191 143.861,131.754 143.861,131.754C145.314,134.243 
147.674,133.524 148.602,133.108C148.75,132.055 149.17,131.337 149.636,130.93C146.019,130.519 
142.216,129.121 142.216,122.879C142.216,121.101 142.851,119.647 143.893,118.508C143.725,118.096 
143.166,116.44 144.052,114.197C144.052,114.197 145.42,113.759 148.532,115.867C149.831,115.506 
151.225,115.325 152.61,115.319C153.993,115.325 155.387,115.506 156.688,115.867C159.798,113.759 
161.163,114.197 161.163,114.197C162.052,116.44 161.493,118.096 161.325,118.508C162.369,119.647 
163,121.101 163,122.879C163,129.137 159.191,130.514 155.562,130.917C156.147,131.42 156.668,132.414 
156.668,133.934C156.668,136.111 156.648,137.868 156.648,138.402C156.648,138.838 156.941,139.345 
157.768,139.186C164.236,137.027 168.899,130.926 168.899,123.731C168.899,114.734 161.605,107.441 
152.608,107.441" style="fill:white;"/></g></g></svg>`
    }
  }
  this.css = `
    .creditTag {
      position: fixed;
      display: block;
    }
    .creditTag a {
      display: block;
      float: left;
      padding: 10px;
      width: 20px;
      height: 20px;
      opacity: ${this.data.opacity};
    }
    .creditTag a:hover {
      border-radius: 4px;
      ${(this.iconColour === 'white') ? (`
        background-color: rgba(255,255,255,0.1);
      `) : (`
        background-color: rgba(0,0,0,0.1);
      `) }
    }
  `;
  // Add stylesheet
  var style = document.createElement('style');
  (style.styleSheet) ? (style.styleSheet.cssText = this.css) : 
(style.appendChild(document.createTextNode(this.css)));
  document.getElementsByTagName('head')[0].appendChild(style);
  Object.assign(this.root.style, {...this.position});
  // Add buttons
  Object.keys(this.accountURLs).forEach((el, i, arr) => {
    var button = document.createElement('a');
    button.setAttribute('href', this.accountURLs[el]);
    button.setAttribute('target', '_blank');
    button.innerHTML = this.SVGs[el][this.iconColour];
    this.root.appendChild(button);
  });
}
/** * @name CreditTag.attach * @description Attaches credit tag to DOM * @author ProbitSnowman **/ 
CreditTag.prototype.attach = function() {
  document.body.appendChild(this.root);
}
new CreditTag({
  'el': 'creditTag',
  'colour': 'white',
  'opacity': 0.75,
  'position': {
    'bottom': '20px',
    'right': '20px'
  },
  'accounts': {
    'twitter': 'ProbitSnowman',
    'github': 'ProbitSnowman'
  }
}).attach();
