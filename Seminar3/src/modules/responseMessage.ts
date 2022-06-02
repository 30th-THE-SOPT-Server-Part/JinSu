const message = {
    NULL_VALUE: '필요한 값이 없습니다.',
    NOT_FOUND: '존재하지 않는 자원',
    BAD_REQUEST: '잘못된 요청',
    INTERNAL_SERVER_ERROR: '서버 내부 오류',

    // 유저 조회
    READ_USER_SUCCESS: '유저 조회 성공',
    CREATE_USER_SUCCESS: '유저 생성 성공',
    DELETE_USER_SUCCESS: '유저 삭제 성공',
    UPDATE_USER_SUCCEss: '유저 삭제 성공'
}

const blogResponseMessage = {
    NOT_FOUND_USER: "작성자의 정보를 찾을 수 없습니다.",
    CREATE_BLOG_SUCCESS: "블로그 글 작성 성공"
}


export{
    message,
    blogResponseMessage
}