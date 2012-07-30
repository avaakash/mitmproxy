import requests
from libpathod import test

class Test:
    """
        Testing the requests module with 
        a pathod context manager.
    """
    def test_simple(self):
        # Start pathod in a separate thread
        with test.Daemon() as d:
            # Get a URL for a pathod spec
            url = d.p("200:b@100")
            # ... and request it
            r = requests.put(url)

            # Check the returned data
            assert r.status_code == 200
            assert len(r.content) == 100

            # Check pathod's internal log
            log = d.last_log()["request"]
            assert log["method"] == "PUT"
