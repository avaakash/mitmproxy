from time import sleep
from mitmproxy import ctx
from mitmproxy import http


class AddLatency:

    def load(self, loader):
        loader.add_option(
            name="latency",
            typespec=int,
            default=0,
            help="Add latency to requests in seconds",
        )

    def request(self, flow: http.HTTPFlow):
        if flow.response or flow.error or not (flow.live or ctx.options.injectchaos):
            return
        self.run()

    def response(self, flow: http.HTTPFlow):
        if flow.error or not (flow.live or ctx.options.injectchaos):
            return
        self.run()

    def run(self):
        if ctx.options.latency > 0:
            sleep(ctx.options.latency)


addons = [AddLatency()]
