""" add latency to requests """

from time import sleep
from mitmproxy import ctx


class AddLatency:

    def load(self, loader):
        loader.add_option(
            name="latency",
            typespec=int,
            default=0,
            help="Add latency to requests",
        )

    def response(self, flow):
        if ctx.options.latency > 0 and ctx.options.injectchaos:
            print(f"Latency added of {ctx.options.latency}s")
            sleep(ctx.options.latency)


addons = [AddLatency()]
