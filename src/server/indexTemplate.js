export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="telephone=no" name="format-detection">
    <meta name="HandheldFriendly" content="true">
    <title>Reddit</title>
    <script src="/static/index.js" type="application/javascript"></script>
    <script >
        window.__token__ = '${token}'
    </script>
</head>
<body>
<div id="react__root">${content}</div>
</body>
</html>
`;
