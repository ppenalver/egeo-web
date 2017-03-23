var options = [];

function fillList(versionList) {
   versionList.forEach(function (name) {
      $('.selectpicker').append($('<option>', {
         value: name,
         text: name
      }));
   }, this);
   $('.selectpicker').selectpicker('refresh');
}

function selectDoc(option) {
   document.getElementById('egeo-doc').src = './' + option;
}

function getFolders() {
   $.get("https://api.github.com/repos/stratio/egeo-web/contents/?ref=gh-pages", function (data) {
      data.forEach(function (element) {
         if (element.type === "dir") {
            options.push(element.name);
         }
      }, this);
      options.sort(reverseCompare);
      fillList(options);
      selectDoc(options[0]);
   });
}

$(document).ready(function () {
   getFolders();
   $('.selectpicker').on('changed.bs.select', function (e, index, newValue, oldValue) {
      selectDoc(options[index]);
   })
});

function reverseCompare(v1, v2) {
   return versionCompare(v1, v2) * -1;
}


function versionCompare(v1, v2, options) {
    var lexicographical = options && options.lexicographical,
        zeroExtend = options && options.zeroExtend,
        v1parts = v1.split('.'),
        v2parts = v2.split('.');

    function isValidPart(x) {
        return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
        return NaN;
    }

    if (zeroExtend) {
        while (v1parts.length < v2parts.length) v1parts.push("0");
        while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length == i) {
            return 1;
        }

        if (v1parts[i] == v2parts[i]) {
            continue;
        }
        else if (v1parts[i] > v2parts[i]) {
            return 1;
        }
        else {
            return -1;
        }
    }

    if (v1parts.length != v2parts.length) {
        return -1;
    }

    return 0;
}
