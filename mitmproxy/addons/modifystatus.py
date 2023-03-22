from mitmproxy import ctx
from mitmproxy import http
from mitmproxy.utils import httpcodes


class ModifyStatusCode:

    def load(self, loader):
        loader.add_option(
            name="modify_status",
            typespec=int,
            default=0,
            help="Modify response status code of the request",
        )

    def response(self, flow: http.HTTPFlow):
        if flow.response or flow.error or not (flow.live or ctx.options.injectchaos):
            return
        self.run()

    def run(self, flow: http.HTTPFlow):
        if ctx.options.injectchaos and ctx.options.modify_status in httpcodes.StatusCode:
            flow.response.status_code = ctx.options.modify_status
            flow.response.reason = httpcodes.StatusCode[ctx.options.modify_status]


addons = [ModifyStatusCode()]
