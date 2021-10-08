/** Auto-generated by test_app.py:test_generate_options_js */
export interface OptionsState {
    add_upstream_certs_to_client_chain: boolean
    allow_hosts: string[]
    anticache: boolean
    anticomp: boolean
    block_global: boolean
    block_list: string[]
    block_private: boolean
    body_size_limit: string | undefined
    cert_passphrase: string | undefined
    certs: string[]
    ciphers_client: string | undefined
    ciphers_server: string | undefined
    client_certs: string | undefined
    client_replay: string[]
    command_history: boolean
    confdir: string
    connection_strategy: string
    console_focus_follow: boolean
    content_view_lines_cutoff: number
    export_preserve_original_ip: boolean
    http2: boolean
    ignore_hosts: string[]
    intercept: string | undefined
    intercept_active: boolean
    keep_host_header: boolean
    key_size: number
    listen_host: string
    listen_port: number
    map_local: string[]
    map_remote: string[]
    mode: string
    modify_body: string[]
    modify_headers: string[]
    onboarding: boolean
    onboarding_host: string
    onboarding_port: number
    proxy_debug: boolean
    proxyauth: string | undefined
    rawtcp: boolean
    readfile_filter: string | undefined
    rfile: string | undefined
    save_stream_file: string | undefined
    save_stream_filter: string | undefined
    scripts: string[]
    server: boolean
    server_replay: string[]
    server_replay_ignore_content: boolean
    server_replay_ignore_host: boolean
    server_replay_ignore_params: string[]
    server_replay_ignore_payload_params: string[]
    server_replay_ignore_port: boolean
    server_replay_kill_extra: boolean
    server_replay_nopop: boolean
    server_replay_refresh: boolean
    server_replay_use_headers: string[]
    showhost: boolean
    ssl_insecure: boolean
    ssl_verify_upstream_trusted_ca: string | undefined
    ssl_verify_upstream_trusted_confdir: string | undefined
    stickyauth: string | undefined
    stickycookie: string | undefined
    stream_large_bodies: string | undefined
    tcp_hosts: string[]
    termlog_verbosity: string
    tls_version_client_max: string
    tls_version_client_min: string
    tls_version_server_max: string
    tls_version_server_min: string
    upstream_auth: string | undefined
    upstream_cert: boolean
    view_filter: string | undefined
    view_order: string
    view_order_reversed: boolean
    web_columns: string[]
    web_debug: boolean
    web_host: string
    web_open_browser: boolean
    web_port: number
    web_static_viewer: string | undefined
    websocket: boolean
}

export type Option = keyof OptionsState

export const defaultState: OptionsState = {
    add_upstream_certs_to_client_chain: false,
    allow_hosts: [],
    anticache: false,
    anticomp: false,
    block_global: true,
    block_list: [],
    block_private: false,
    body_size_limit: undefined,
    cert_passphrase: undefined,
    certs: [],
    ciphers_client: undefined,
    ciphers_server: undefined,
    client_certs: undefined,
    client_replay: [],
    command_history: true,
    confdir: "~/.mitmproxy",
    connection_strategy: "eager",
    console_focus_follow: false,
    content_view_lines_cutoff: 512,
    export_preserve_original_ip: false,
    http2: true,
    ignore_hosts: [],
    intercept: undefined,
    intercept_active: false,
    keep_host_header: false,
    key_size: 2048,
    listen_host: "",
    listen_port: 8080,
    map_local: [],
    map_remote: [],
    mode: "regular",
    modify_body: [],
    modify_headers: [],
    onboarding: true,
    onboarding_host: "mitm.it",
    onboarding_port: 80,
    proxy_debug: false,
    proxyauth: undefined,
    rawtcp: true,
    readfile_filter: undefined,
    rfile: undefined,
    save_stream_file: undefined,
    save_stream_filter: undefined,
    scripts: [],
    server: true,
    server_replay: [],
    server_replay_ignore_content: false,
    server_replay_ignore_host: false,
    server_replay_ignore_params: [],
    server_replay_ignore_payload_params: [],
    server_replay_ignore_port: false,
    server_replay_kill_extra: false,
    server_replay_nopop: false,
    server_replay_refresh: true,
    server_replay_use_headers: [],
    showhost: false,
    ssl_insecure: false,
    ssl_verify_upstream_trusted_ca: undefined,
    ssl_verify_upstream_trusted_confdir: undefined,
    stickyauth: undefined,
    stickycookie: undefined,
    stream_large_bodies: undefined,
    tcp_hosts: [],
    termlog_verbosity: "info",
    tls_version_client_max: "UNBOUNDED",
    tls_version_client_min: "TLS1_2",
    tls_version_server_max: "UNBOUNDED",
    tls_version_server_min: "TLS1_2",
    upstream_auth: undefined,
    upstream_cert: true,
    view_filter: undefined,
    view_order: "time",
    view_order_reversed: false,
    web_columns: ["tls", "icon", "path", "method", "status", "size", "time"],
    web_debug: false,
    web_host: "127.0.0.1",
    web_open_browser: true,
    web_port: 8081,
    web_static_viewer: "",
    websocket: true,
}
