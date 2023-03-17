""" add path filtering to requests """

from mitmproxy import ctx

filter_type = "method"
filter_value = "GET"
latency = 1


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

    def requestheaders(self, flow):
        print(f"Request Path {flow.request.path} ----- Filter Path {ctx.options.path}")
        if ctx.options.path == "" or flow.request.path == ctx.options.path:
            ctx.options.injectchaos = True
        else:
            ctx.options.injectchaos = False


addons = [PathBasedFiltering()]
