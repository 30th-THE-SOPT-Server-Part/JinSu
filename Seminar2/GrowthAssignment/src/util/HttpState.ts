const HttpState = {
    // OK
    OK: 200,
    // Created
    CREATED: 201,
    // Accepted
    ACCEPTED: 202,
    // No Content
    NO_CONTENT: 204,
    // 스트리밍과 같이 요청에 대한 일부 응답 먼저 전송한 경우
    PARTIAL_CONTENT: 206,
    /* 300 번대 페이지 이동에 주로 쓰임*/
    // Moved Permanently, 영구적 주소 변경시
    MOVED_PERMANENTLY: 301,
    // Moved Temporarily, 대부분 리다이렉트 코드
    MOVED_TEMPORARILY: 302,
    // Not Modified, 이전 방문과 다른 점이 없을 경우, 캐시된 페이지 그대로 사용
    NOT_MODIFIED: 304,
    // Temporary Redirect, 임시 페이지 리다이렉트
    TEMPORARY_REDIRECT: 307,
    // Bad Request
    BAD_REQUEST: 400,
    // Unauthorized
    UNAUTHORIZED: 401,
    // Forbidden
    FORBIDDEN: 403,
    // Not Found
    NOT_FOUND: 404,
    // Request Timeout
    REQUEST_TIMEOUT: 408,
    // Conflict
    CONFLICT: 409,
    // Gone
    GONE: 410,
    // Unavailable For Legal Reasons
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    // Internal Server Error
    INTERNAL_SERVER_ERROR: 500,
    // Not Implemented, 서버에 해당 요청 처리 기능 없음
    NOT_IMPLEMENTED: 501,
    // Bad Gateway, 요청 유실
    BAD_GATEWAY: 502,
    // Service Unavailable
    SERVICE_UNAVAILABLE: 503,
    // Gateway Timeout
    GATEWAY_TIMEOUT: 504,
    // HTTP Version Not Supported
    HTTP_VERSION_NOT_SUPPORTED: 505
} as const

export default HttpState;