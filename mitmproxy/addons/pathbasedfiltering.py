import re

from mitmproxy import ctx
from mitmproxy import http


class PathBasedFiltering:
    def __init__(self):
        self.num = 0

    def load(self, loader):
        loader.add_option(
            name="path",
            typespec=str,
            default="",
            help="Request path to filter on",
        )
        loader.add_option(
            name="injectchaos",
            typespec=bool,
            default=True,
            help="Decide whether to modify request"
        )

    def requestheaders(self, flow: http.HTTPFlow):
        path_filter = ctx.options.path
        request_path = flow.request.host + flow.request.path
        ctx.options.injectchaos = True
        if path_filter != "":
            try:
                re.compile(path_filter)
            except re.error as e:
                raise ValueError(f"Invalid regular expression {path_filter!r} ({e})")
            if not re.search(path_filter, request_path):
                ctx.options.injectchaos = False
                return


addons = [PathBasedFiltering()]
