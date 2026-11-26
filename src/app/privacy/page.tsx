import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ORCA Pinterest 연동 개인정보처리방침 | 조블라",
  description: "조블라 카페 ORCA Pinterest 연동 개인정보처리방침 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl bg-white border border-[#ECE5DC] p-7 sm:p-12 shadow-sm">
          {/* Header */}
          <header className="pb-6 border-b border-[#EAE3D9]">
            <p className="text-xs font-semibold tracking-wider text-[#9B4A25]">
              <Link href="/" className="hover:underline">
                조블라 카페
              </Link>
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-[#2D2522] leading-snug">
              ORCA Pinterest 연동 개인정보처리방침
            </h1>
            <p className="mt-2 text-xs text-[#8C8075]">운영자 조블라 카페</p>
          </header>

          {/* Content */}
          <div className="mt-8 space-y-7 text-sm leading-relaxed text-[#4D423B]">
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#2D2522] mb-2">
                적용 범위
              </h2>
              <p>
                이 방침은 조블라 카페의 콘텐츠 운영 도구 ORCA에서 Pinterest 계정을
                연결하고 테스트 보드와 이미지 핀을 관리할 때 적용됩니다. ORCA의
                Pinterest 기능은 권한을 부여받은 조블라 운영 담당자가 사용합니다.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#2D2522] mb-2">
                처리하는 정보와 이용 목적
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#2D2522]">계정 연결 확인</strong>을 위해
                  운영 담당자가 입력한 샌드박스 액세스 토큰과 Pinterest API가
                  반환한 사용자명, ORCA가 기록한 연결 시각을 처리합니다.
                </li>
                <li>
                  <strong className="text-[#2D2522]">
                    보드 선택과 테스트 핀 생성
                  </strong>
                  을 위해 연결된 계정의 보드 이름과 식별자, 운영 담당자가 입력한
                  핀 제목과 설명, 이미지 주소, 선택적으로 입력한 연결 페이지
                  주소를 처리합니다. 핀 생성은 운영 담당자가 미리보기를 확인하고
                  승인한 뒤 요청합니다.
                </li>
                <li>
                  <strong className="text-[#2D2522]">
                    중복 생성 방지와 결과 확인
                  </strong>
                  을 위해 실행 시각과 상태, 대상 계정 사용자명과 보드 정보, 핀
                  제목과 생성된 핀 식별자를 기록할 수 있습니다.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#2D2522] mb-2">
                저장, 보유 및 삭제
              </h2>
              <p>
                토큰과 계정 연결 정보는 ORCA가 실행되는 환경에 암호화해
                저장합니다. ORCA에서 연결을 해제하면 저장된 연결 정보가
                삭제됩니다. Pinterest에서 부여한 접근 권한은 Pinterest 계정
                설정에서 철회할 수 있습니다.
              </p>
              <p className="mt-3">
                테스트 이력은 실행 결과 확인과 중복 생성 방지에 필요한 기간 동안
                보관합니다. 운영 목적이 끝나거나 권한이 철회되는 등 Pinterest
                데이터 삭제 사유가 발생하면, 관련 법령에 따른 보존 의무가 있는
                경우를 제외하고 불필요한 데이터를 지체 없이 삭제하며 Pinterest
                약관상 삭제 기한을 적용합니다. 연결 해제와 이력 삭제 요청은 아래
                문의처에서 접수할 수 있습니다. Pinterest에 만든 보드나 핀은
                Pinterest 계정에서 별도로 관리할 수 있습니다.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#2D2522] mb-2">
                외부 서비스와 보호 조치
              </h2>
              <p>
                계정 및 보드 조회와 승인된 테스트 핀 생성 요청은 HTTPS를 통해
                Pinterest API에 전달됩니다. ORCA는 테스트 실행 이력을 관리하는 데
                Neon의 데이터베이스 서비스를 사용합니다. Pinterest에서 처리하는
                정보에 관한 사항은{" "}
                <a
                  href="https://policy.pinterest.com/ko/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#9B4A25] underline underline-offset-4 hover:text-[#7D391A]"
                >
                  Pinterest 개인정보처리방침
                </a>
                을 확인해 주세요.
              </p>
              <p className="mt-3">
                ORCA는 연결 정보를 암호화하고 연동 기능에 대한 접근을 제한합니다.
                Pinterest 연동에서 받은 정보를 판매하거나 제3자의 광고 타기팅에
                사용하지 않습니다.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#2D2522] mb-2">
                개인정보 문의와 권리 행사
              </h2>
              <p>
                개인정보 열람, 정정, 삭제, 처리정지 또는 동의 철회를 요청하려면
                조블라 카페에 연락해 주세요. 요청을 처리하는 데 필요한 범위에서
                본인 여부를 확인할 수 있습니다.
              </p>
              <p className="mt-2 font-medium text-[#2D2522]">
                조블라 카페 운영팀{" "}
                <a
                  href="tel:050713559243"
                  className="text-[#9B4A25] underline underline-offset-4 hover:text-[#7D391A]"
                >
                  0507-1355-9243
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#2D2522] mb-2">
                방침 변경
              </h2>
              <p>
                처리하는 정보, 이용 목적 또는 운영 방식이 바뀌면 변경 내용과
                적용일을 이 페이지에 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
