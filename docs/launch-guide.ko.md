# MirinaeLabs 홈페이지·이메일 개설 안내

확인일: 2026-10-16. 실제 계정에서 무료 플랜 제공 여부를 확인한 뒤 개설한다. 무료 제공 정책은 바뀔 수 있으며 영구적인 비용 0원을 보장할 수는 없다.

## 선택한 구성

| 용도                          | 서비스                                   | 비용·조건                                                       |
| ----------------------------- | ---------------------------------------- | --------------------------------------------------------------- |
| 도메인 보유·갱신              | hosting.kr의 `mirinaelabs.com`           | 기존 등록·갱신 비용만 유지                                      |
| DNS·HTTPS                     | Cloudflare Free + Pages 인증서           | 무료                                                            |
| 소스 관리                     | 기존 `MirinaeLabs/mirinaelabs.github.io` | 기존 공개 저장소 사용                                           |
| 홈페이지 자동 배포            | Cloudflare Pages Free의 GitHub 연동      | 무료, 월 500빌드·동시 1빌드 범위                                |
| 회사 주소 메일 수신·발신·답장 | Zoho Mail Forever Free                   | 제공되는 데이터센터에서만 가입 가능. 1도메인, 최대 5명, 1인 5GB |
| 편지함 이용                   | Zoho 웹메일 또는 공식 모바일 앱          | 무료 플랜에 IMAP·POP·ActiveSync 미포함                          |

홈페이지는 정적 파일만 배포한다. 별도 서버·데이터베이스·유료 Functions는 사용하지 않는다. GitHub Actions는 빌드와 링크 검증을 하고, 실제 자동 배포는 Cloudflare의 Git 연동이 수행한다. 별도 Cloudflare API 토큰이나 GitHub Secret은 필요하지 않다.

Cloudflare Email Routing은 기본적으로 수신 전달용이다. 이것만 설정해서는 회사 주소로 외부 고객에게 답장할 수 없다. 일반 외부 수신자에게 Cloudflare Email Sending으로 보내려면 Workers 유료 플랜이 필요하므로 이번 구성에 포함하지 않는다.

## 지금 준비된 것과 남은 것

- 회사 메인 페이지, AuroraViewer 제품·기존 한영 설명서 연결, 개인정보 안내, 404 페이지.
- PC·모바일 레이아웃, 사이트맵, 검색 메타데이터, HTTPS 정식 주소, www 리다이렉트 파일.
- 회사 사이트 빌드·전체 내부 링크 검증, GitHub Actions 설정.
- 회사 소개 문구는 초안이다. 공개 전 실제 회사 소개와 맞는지 확인한다.
- `contact@mirinaelabs.com`은 아직 개설 완료로 표시하지 않는다. 수신·발신 테스트 후 아래 절차로 메일 링크를 활성화한다.
- Cloudflare 계정 로그인·GitHub 앱 연결, DNS 위임, Zoho 가입·도메인 인증, 실제 배포는 계정 설정이 필요하다.

## 1. Cloudflare에 도메인 추가

1. [Cloudflare 대시보드](https://dash.cloudflare.com/)에서 로그인한다. 계정이 없다면 본인이 가입·인증한다.
2. `mirinaelabs.com`을 추가하고 **Free** 플랜을 선택한다. 유료 플랜·추가 기능은 선택하지 않는다.
3. 기존 DNS 레코드를 확인한다. 기존 홈페이지·메일·인증용 레코드가 있다면 보존한다.
4. Cloudflare가 이 도메인에 배정한 **두 개의 네임서버**를 기록한다. 값은 계정마다 다르므로 예시 주소를 입력하지 않는다.

## 2. hosting.kr에서 네임서버 변경

1. [hosting.kr](https://hosting.kr/)에 로그인하고 도메인 관리에서 `mirinaelabs.com`을 선택한다.
2. 네임서버 변경 메뉴에서 Cloudflare가 배정한 두 개의 서버를 입력한다.
3. 적용 후 Cloudflare에서 도메인이 **Active**가 되는지 확인한다. 전파에는 최대 24~48시간이 걸릴 수 있다.
4. DNSSEC가 기존 DNS 업체에 설정되어 있다면 hosting.kr의 DS 레코드 처리 절차를 먼저 확인한다. 이전 업체의 DS를 남긴 채 위임하면 DNS 검증에 실패할 수 있다. 위임 완료 후 Cloudflare DNSSEC를 설정할 수 있다.

도메인을 이전하거나 다시 구입할 필요는 없다. 등록·갱신은 hosting.kr에서 계속한다. 위임 후 웹·메일 DNS 레코드는 Cloudflare에서 관리한다.

## 3. GitHub → Cloudflare Pages 자동 배포

기존 GitHub Pages의 AuroraViewer 소개·설명서는 유지하면서, Cloudflare에는 회사 메인과 제품 페이지를 함께 배포한다. 회사 사이트의 배포 결과물은 `dist/`이며 저장소 전체를 그대로 업로드하지 않는다.

1. GitHub의 회사 홈페이지 변경 PR을 검토해 `main`에 반영한다.
2. Cloudflare → **Workers & Pages → Create application → Pages → Import an existing Git repository**로 이동한다. 메뉴 이름은 UI 개편에 따라 다를 수 있다.
3. GitHub 계정 `MirinaeLabs`를 연결하고 저장소 `mirinaelabs.github.io`만 선택한다. 새 GitHub 앱 권한 승인은 계정 소유자가 진행한다.
4. 다음 값을 설정한다.

| 항목                   | 값                                           |
| ---------------------- | -------------------------------------------- |
| 프로젝트 이름          | `mirinaelabs` (사용 불가하면 다른 이름 가능) |
| Production branch      | `main`                                       |
| Framework preset       | `None`                                       |
| Root directory         | 저장소 루트 / 비워 두기                      |
| Build command          | `npm run validate:company`                   |
| Build output directory | `dist`                                       |
| Environment variable   | `NODE_VERSION` = `22`                        |

5. 배포가 성공하면 **실제로 발급된** `*.pages.dev` 주소에서 메인, 제품, 설명서, 모바일 레이아웃을 확인한다. 프로젝트 이름에서 URL을 추측해 DNS에 먼저 입력하지 않는다.
6. 이후 `main`에 push하면 Cloudflare가 자동으로 새 버전을 빌드·배포한다. PR 브랜치는 프리뷰로 확인할 수 있다.

**처음부터 Git 저장소 연동 방식으로 만든다.** Direct Upload 프로젝트를 먼저 만들면 나중에 같은 프로젝트를 Git 연동으로 전환할 수 없다.

## 4. 구매한 도메인 연결

1. Pages 프로젝트 → **Custom domains → Set up a custom domain**에서 `mirinaelabs.com`을 추가한다.
2. 같은 곳에서 `www.mirinaelabs.com`도 추가한다. `_redirects` 파일이 www 요청을 기본 주소로 보낸다. www 도메인도 인증서·연결이 완료되어야 리다이렉트가 동작한다.
3. Cloudflare가 안내하는 웹용 DNS 레코드를 적용하고 도메인과 인증서가 **Active**가 될 때까지 기다린다.
4. `https://mirinaelabs.com/`, `/auroraviewer/`, `/auroraviewer/manual/`을 확인한다.

루트 도메인을 Pages에 연결하려면 Cloudflare의 네임서버를 사용해야 한다. DNS 레코드만 먼저 수동으로 만들지 말고 Pages의 Custom domains에서 등록부터 완료한다.

## 5. Zoho 무료 업무용 메일 개설

1. [Zoho Mail 가격표](https://www.zoho.com/mail/zohomail-pricing.html)의 **Forever Free Plan**을 확인한다. 유료 요금제의 무료 체험과 구분한다.
2. 현재 계정·지역에서 해당 플랜 가입이 가능한지 먼저 확인한다. 무료 옵션이 없으면 결제·유료 체험으로 대체하지 말고 이 단계에서 메일 서비스 선택을 다시 한다.
3. 기존 도메인 `mirinaelabs.com`을 등록하고 Zoho가 발급한 도메인 인증 TXT를 Cloudflare DNS에 추가한다.
4. `contact@mirinaelabs.com` 사용자 편지함을 만든다. 사용자 비밀번호·복구 정보·2단계 인증은 계정 소유자가 설정한다.
5. **Zoho 관리자 화면이 표시하는 값 그대로** 다음 DNS를 추가한다. 계정이 속한 데이터센터에 따라 값이 달라진다.

| DNS 용도                 | 이름                   | 값·주의사항                                                          |
| ------------------------ | ---------------------- | -------------------------------------------------------------------- |
| 도메인 인증 TXT          | Zoho 안내 값           | 계정에서 발급된 인증값                                               |
| 수신 MX                  | `@`                    | Zoho 안내 서버·우선순위 전체                                         |
| 발신 SPF TXT             | `@`                    | Zoho 안내 값. 같은 이름의 `v=spf1` 레코드는 1개만 유지               |
| 발신 DKIM TXT 또는 CNAME | Zoho가 발급한 selector | 발급된 공개키/대상값. CNAME이면 DNS only                             |
| DMARC TXT                | `_dmarc`               | 처음에는 `v=DMARC1; p=none;`으로 관찰 후 정상 발신 확인 뒤 정책 강화 |

6. MX는 **Zoho 한 서비스만** 사용한다. Cloudflare Email Routing을 동시에 활성화하지 않는다. SPF에 필요한 include를 합쳐야 할 수 있지만 SPF 레코드를 중복 생성하지 않는다.
7. Zoho에서 도메인 인증·MX·SPF·DKIM 검증을 완료한다.
8. [Zoho 웹메일](https://mail.zoho.com/) 또는 공식 앱에서 회사 메일을 사용한다. 무료 플랜으로 Outlook·Apple Mail·Gmail IMAP 연동이 된다고 가정하지 않는다.

Gmail의 외부 주소 발신 방식은 Google 공식 도움말의 2027년 1월 지원 중단 안내 때문에 장기 기본안에서 제외했다. 이 부분의 정책이 바뀌면 다시 확인한다.

## 6. 실제 메일 왕복 확인과 홈페이지 활성화

1. 외부 Gmail 또는 다른 서비스 계정에서 `contact@mirinaelabs.com`으로 보내 Zoho 받은편지함에 도착하는지 확인한다.
2. **Zoho에서 답장**하고 외부 계정에서 받은편지함·보낸사람·Reply-To를 확인한다. 회사 주소로 표시되어야 한다.
3. Zoho에서 다른 외부 주소로 새 메일을 보내 발신도 확인한다. 수신만 테스트해서 완료로 판단하지 않는다.
4. 수신된 메일의 원본에서 SPF/DKIM/DMARC 결과를 확인한다. 발신 인증과 DMARC 정렬이 통과하는지, 스팸함으로 가지 않는지 살펴본다.
5. 확인 후 `company/index.html`의 `.email-address` 문단을 다음 링크로 교체하고 `.email-status`를 `제품 문의와 협업 제안을 기다립니다.`로 변경한다.

```html
<a class="email-address text-link" href="mailto:contact@mirinaelabs.com"
  >contact@mirinaelabs.com ↗</a
>
```

6. `main` 반영 → Cloudflare 자동 배포 성공 → 실제 도메인에서 문의 링크를 확인한다.

## 확인 명령과 비용 관리

```sh
npm ci
npm run validate:company
npm run preview:company
# http://127.0.0.1:4322/

npm run check:domain
npm run check:domain -- <Zoho의_DKIM_selector>
```

`check:domain`은 공개 DNS와 HTTPS 상태만 읽는다. 웹 콘텐츠 진위·인증서 갱신 장기 보장·DKIM 실제 서명·메일 송수신 성공까지 증명하는 도구는 아니다. 설정 전에는 PENDING과 종료 코드 1이 정상이다.

Cloudflare는 Free·Pages 정적 호스팅, Zoho는 Forever Free를 유지한다. 자동 업그레이드나 유료 추가 기능을 켜지 않는다. 가입 과정에서 카드나 유료 플랜이 요구되면 무료 제공 조건부터 재확인한다. 메일 저장 공간·인원·발송 정책과 무료 빌드 한도를 지킨다.

## 공식 근거

- [Cloudflare Pages 가격·무료 범위](https://pages.cloudflare.com/)
- [Cloudflare Pages 한도](https://developers.cloudflare.com/pages/platform/limits/)
- [GitHub 연동](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare Email 요금: 외부 발송은 유료 플랜](https://developers.cloudflare.com/email-service/platform/pricing/)
- [Zoho Mail Forever Free 플랜·지역 제한](https://www.zoho.com/mail/zohomail-pricing.html)
- [Zoho MX 설정: 관리자 화면에 맞는 값 사용](https://www.zoho.com/mail/help/adminconsole/configure-email-delivery.html)
- [Google Gmail 외부 주소 발신 변경 안내](https://support.google.com/mail/answer/22370?hl=ko)
