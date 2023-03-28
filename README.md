# txios-frontend-examples



## TL;DR
```typescript
/**
 * @rtId : MsaMaker 라우팅 룰 Id (NontNull)
 * @payload : 라우팅 룰에 필요한 데이터(Optional)
 */
txios
  .start(rtId, payload) 
  .then((txResponse) => /* response */ )
  .catch((txError) =>  /* error */ );
```

### install
```
yarn install
```

### start
```powershell
yarn react # http://localhost:3000/
yarn vue2 # http://localhost:3001/ 
yarn vue3 # http://localhost:3002/
```



### Check Point
- SOP(CORS)

## Txios

| 클래스 | 함수                                                            | 설명                               |                  기본값                  |
| :----- | :-------------------------------------------------------------- | :--------------------------------- | :--------------------------------------: |
| Txios  | `static create(config: TxiosConfig): Txios`                     | Txios인스턴스 생성                 |                 notNull                  |
| Txios  | `start<P, R>(rtId: string, payload: P): Promise<TxResponse<R>>` | payload와 함께 rtid 라우팅 룰 실행 |     rtid(NotNull), payload(Optional)     |
| Txios  | `setTimeout(sec: number)`                                       | 타임아웃 시간 변경                 |                   `10`                   |
| Txios  | `setHeaders(headers)`                                           | 트랜잭션 요청 헤더 변경(global)    | `{ "Content-Type": "application/json" }` |
| Txios  | `enableCallStackLog(isPrint: boolean)`                          | 요청 순서를 콘솔에 출력(디버깅용)  |                 `false`                  |
| Txios  | `createTransaction()`                                           | 트랜잭션 인스턴스 생성             |                    -                     |

## TxiosError

| 클래스     | 필드                        | 설명                                     |
| :--------- | :-------------------------- | :--------------------------------------- |
| TxiosError | `errorCode: TxiosErrorCode` | 현재 에러 유형 코드 (TxiosErrorCode참조) |
| TxiosError | `errorMessage: unknown`     | 에러 메시지 및 정보                      |

## TxiosErrorCode

| 클래스         | 코드                     | 설명                                                 |
| :------------- | :----------------------- | :--------------------------------------------------- |
| TxiosErrorCode | `RUNNER_REQUEST_FAIL`    | Runner요청 중 오류가 발생한 경우                     |
| TxiosErrorCode | `RUNNER_RESPONSE_FAIL`   | Runner응답 TxId가 undefined 인경우                   |
| TxiosErrorCode | `NOTIFIER_SOCKET_CLOSED` | Transaction.call 호출 전 소켓이 닫혀 있는 경우       |
| TxiosErrorCode | `TIMEOUT`                | 제한시간내에 응답을 받지 못했을 경우(default: 10sec) |
| TxiosErrorCode | `UNKNOWN`                | 정의되지 않은 에러                                   |

Txios Npm : https://www.npmjs.com/package/@msa-makers/txios
