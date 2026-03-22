export default function HundredPeopleProjectHomepage() {
  const people = [
    {
      no: "001",
      image: "https://picsum.photos/seed/ojima-001/800/520",
      name: "谷村一成",
      role: "NPO法人みんなの進路委員会 代表",
      catchcopy: "見えていない世界へ踏み出すことも、進路選択のひとつ。",
      summary:
        "正直、この人に会えるだけで得をしたと思えるレベル。生徒や教員の視野を本気で広げ続けていて、そのエネルギーと行動力は圧倒的。関わった人の世界を確実に変えてしまう力を持っている。",
      turningPoint:
        "見えている世界だけで進路を決めるのではなく、未知の世界に踏み出す価値を体現しているところに強く惹かれた。",
      learning:
        "問いに向き合い続けること、その覚悟こそが生き方になると感じた。この人の話は、何度でも聞きたい。",
      tags: ["教育", "キャリア教育", "探究", "海外", "挑戦"],
    },
    {
      no: "002",
      image: "https://picsum.photos/seed/ojima-002/800/520",
      name: "のなみモカ",
      role: "大学生（海外進学に挑戦）",
      catchcopy: "固定された進路観にとらわれず、自分の道を切り開く。",
      summary:
        "この人の話を聞けただけで価値があると思えた存在。自分で稼ぎ、自分で選び、自分で進む。その生き方そのものがメッセージになっていて、エネルギーがとにかくすごい。",
      turningPoint:
        "環境や常識に従うのではなく、自分で人生を選び取っている姿に衝撃を受けた。",
      learning:
        "『環境のせいにしない』という生き方を、言葉ではなく行動で教えてくれた。",
      tags: ["学生", "海外", "挑戦", "キャリア", "語学"],
    },
    {
      no: "003",
      image: "https://picsum.photos/seed/ojima-003/800/520",
      name: "岡崎純來",
      role: "高校生・留学経験スピーカー",
      catchcopy: "制度に縛られず、自分の学びを主体的に設計する。",
      summary:
        "正直、年齢とか関係なく完全にやられた。高校生とは思えない決断力と行動力を持ち、さらにその経験を言葉にして伝える力も圧倒的。大人でもここまでできる人はなかなかいない。",
      turningPoint:
        "制度に従うのではなく、自分で進路を選び直したその覚悟に強く心を打たれた。",
      learning:
        "年齢は関係ない。自分の人生は自分で選べるということを突きつけられた。",
      tags: ["学生", "留学", "挑戦", "教育", "プレゼン"],
    },
    {
      no: "004",
      image: "https://picsum.photos/seed/ojima-004/800/520",
      name: "森田幸浩",
      role: "フランス料理ケータリング『voyage』経営",
      catchcopy: "『このままでいいのか』という問いに、生き方で答える。",
      summary:
        "この人の生き方は、ずっと頭に残る。安定ではなく、自分の問いに正直に生きることを選んだ人。その姿そのものが強いメッセージになっていて、『自分はどう生きるか』を考えさせられた。",
      turningPoint:
        "『このままでいいのか』という問いから逃げずに、自分の道を選び直したところに惹かれた。",
      learning:
        "問いに向き合い続けること、その覚悟こそが生き方になると感じた。",
      tags: ["起業", "料理", "移住", "キャリア転換", "挑戦"],
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(59,130,246,0.10),_transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-100 px-4 py-1 text-sm">
              小島の100人プロジェクト
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              100人に会いにいく。
              <br />
              人生を聴き、語り、変化を生む。
            </h1>
            <p className="text-lg leading-8 text-stone-700 md:text-xl">
              「オレか、オレ以外か」じゃない。
              <br />
              オレ以外は、みんな先生だった。
              <br />
              <br />
              だから、会いにいく。
              <br />
              生き方を聴き、そして自分の言葉で語る。
              <br />
              <br />
              聴くことで、自分が変わる。
              <br />
              語ることで、誰かの人生が変わる。
              <br />
              <br />
              これは、
              自分と、誰かの生き方に向き合う旅だ。
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="rounded-2xl bg-amber-500 px-6 py-3 text-white shadow-sm transition hover:-translate-y-0.5"
              >
                話してみる
              </a>
              <a
                href="#people"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-white shadow-sm transition hover:-translate-y-0.5"
              >
                出会った人を見る
              </a>
              <a
                href="#wants"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 transition hover:bg-stone-100"
              >
                やりたいことを見る
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 transition hover:bg-stone-100"
              >
                できることを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm text-stone-500">現在の記録人数</div>
            <div className="mt-2 text-4xl font-bold">4 / 100</div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm text-stone-500">プロジェクトの軸</div>
            <div className="mt-2 text-2xl font-semibold">対話 / 記録 / 変化</div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm text-stone-500">今のテーマ</div>
            <div className="mt-2 text-2xl font-semibold">教育と生き方</div>
          </div>
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-bold">小島大和について</h2>
            <p className="mt-4 leading-8 text-stone-700">
              <strong>学びの編集者／高知県の高校教師</strong>
              <br />
              探究型の学びを実践しながら、答えのない問いを問い続けている。
              <br />
              <br />
              理科・地学の教員として、正解のない問いから学びをつくる探究型の授業を実践している。
              <br />
              <br />
              同じように、
              <br />
              バレーボール・ビーチバレーボールの指導を通して、挑戦することそのものから成長する力を育てる。
              <br />
              <br />
              <strong>「このままでいいのか？」</strong>という問いを持ち続けながら、
              人と出会い、問いを深め、語り続けている。
              <br />
              <br />
              聴くことで、自分が変わる。
              <br />
              語ることで、誰かの人生が変わる。
              <br />
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <img
                src="https://picsum.photos/seed/ojima-profile/900/1100"
                alt="小島大和プロフィール写真"
                className="w-full max-w-md rounded-3xl object-cover shadow-lg"
              />
            </div>
            <div className="rounded-3xl bg-stone-100 p-6 text-stone-600">
              <div className="text-sm font-semibold">こんな人に会いたい</div>
              <div className="mt-4 space-y-2">
                <div>・自分の人生について考えている人</div>
                <div>・何かに挑戦している人</div>
                <div>・これから変わりたいと思っている人</div>
                <div>・自分の話を誰かに聴いてほしい人</div>
              </div>
              <div className="mt-6 text-sm text-stone-500">
                ※「あなたもこの中の一人かもしれません」など一言追加も可
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="wants" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">やりたいこと</h2>
          <p className="mt-2 text-stone-600">
            まずは、会って話を聴かせてほしい。そこからすべてが始まります。遠くても、近くても、タイミングが合えばどこへでも会いにいきます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">気軽に会う</h3>
            <p className="mt-3 text-stone-700 leading-7">
              特別な準備はいりません。雑談でも大丈夫です。ほんの少し時間があれば、それだけで十分です。あなたのこれまでや今考えていることを、気軽に聴かせてください。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">人生を聴く</h3>
            <p className="mt-3 text-stone-700 leading-7">
              挑戦や転機、迷いも含めて、その人の生き方をその人の言葉で聴きたい。オレ以外はみんな先生だと思って向き合います。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">対話をひらく</h3>
            <p className="mt-3 text-stone-700 leading-7">
              一方的に聴くだけでなく、問いを行き来しながら一緒に考える。対話の中で、新しい視点や気づきが生まれる時間をつくります。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">語り合う</h3>
            <p className="mt-3 text-stone-700 leading-7">
              聴くだけでなく、自分の言葉でも語る。その往復の中で、互いの問いを深めていきます。
            </p>
          </div>
        </div>
      </section>
      <div className="mt-4 text-right px-6 max-w-6xl mx-auto">
        <a href="#top" className="text-sm text-stone-500 hover:underline">↑ 先頭に戻る</a>
      </div>

      <section id="services" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">できること</h2>
          <p className="mt-2 text-stone-600">
            対話・講演・教育・スポーツ指導を通して、学びや生き方に向き合う時間をつくります。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">対話</h3>
            <p className="mt-3 text-stone-700 leading-7">
              1対1や少人数での対話を通して、その人の中にある「まだ言葉になっていないもの」に触れていきます。
              問いを行き来しながら、考えや迷い、これまでの経験をほどき、
              自分自身の言葉として立ち上げていく時間です。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">講演</h3>
            <p className="mt-3 text-stone-700 leading-7">
              教育・生き方・挑戦をテーマに、実践や出会いをもとに講演を行います。
              答えを伝えるのではなく、聴いた人それぞれの中に問いが立ち上がる時間をつくります。
              ご希望のテーマや場に合わせて、内容を一緒に組み立てていきます。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">教育</h3>
            <p className="mt-3 text-stone-700 leading-7">
              理科・地学の学びや探究型授業の実践を通して、知識を「自分ごと」に変えていきます。
              知識を伝えるのではなく、双方向のやりとりから学びを創り、問いから学びを深めていく授業をつくっていきます。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">コーチング</h3>
            <p className="mt-3 text-stone-700 leading-7">
              バレーボール・ビーチバレーボールの指導を通して、挑戦することそのものから成長する力を育てていきます。
              技術だけでなく、目や身体、思考の使い方に意識を向けることで、普段の練習の見え方そのものを変えていきます。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">防災</h3>
            <p className="mt-3 text-stone-700 leading-7">
              南海トラフ地震をはじめとした防災について、仕組みやリスクを伝えるだけでなく、「自分はどうするのか」を考える問いとして届けます。
              学校・地域・講演など、場や対象に応じて内容を組み立てながら、知識を行動につなげていく時間をつくっていきます。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="text-xl font-bold">飲み会要員</h3>
            <p className="mt-3 whitespace-pre-line text-stone-700 leading-7">
              {`高知といえばお酒！
飲みの場も、立派な対話の場です。

かしこまった場では出てこない言葉や、本音がふとこぼれる。
そんな時間を、一緒に楽しくつくれたらうれしいです。

※飲み会要員、大歓迎。`}
            </p>
          </div>
        </div>
      </section>
      <div className="mt-4 text-right px-6 max-w-6xl mx-auto">
        <a href="#top" className="text-sm text-stone-500 hover:underline">↑ 先頭に戻る</a>
      </div>

      <section id="people" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">これまでに出会った人</h2>
            <p className="mt-2 text-stone-600">
              一人ひとりの人生の選択や言葉が、このプロジェクトを前に進めています。
            </p>
          </div>
          <div className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-600">
            随時更新予定
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {people.map((person) => (
            <article
              key={person.no}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-medium text-stone-500">No.{person.no}</div>
                <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
                  Interview Log
                </div>
              </div>
              <img
                src={person.image}
                alt={`${person.name}の写真`}
                className="mt-4 h-48 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-2xl font-bold">{person.name}</h3>
              <p className="mt-2 text-stone-600">{person.role}</p>
              <p className="mt-5 leading-8 text-stone-800">{person.catchcopy}</p>

              <div className="mt-5 space-y-3 text-sm text-stone-700">
                <div>
                  <span className="font-semibold">概要：</span>
                  {person.summary}
                </div>
                <div>
                  <span className="font-semibold">転機：</span>
                  {person.turningPoint}
                </div>
                <div>
                  <span className="font-semibold">学び：</span>
                  {person.learning}
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {person.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="mt-4 text-right px-6 max-w-6xl mx-auto">
        <a href="#top" className="text-sm text-stone-500 hover:underline">↑ 先頭に戻る</a>
      </div>

      <section id="request" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <h2 className="text-3xl font-bold">一緒にできること（ご相談）</h2>
          <p className="mt-4 leading-8 text-stone-700">
            講演・対話・授業づくり・コーチングなど、
            場や目的に応じて一緒に形をつくっていくことができます。
            <br />
            <br />
            「こんなことできるかな？」くらいの段階でも大丈夫です。
            まずは対話の中で、一緒に考えていけたらうれしいです。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-100 p-5">
              <div className="font-semibold">講演・ワークショップ</div>
              <p className="mt-2 text-sm text-stone-700">
                教育・生き方・挑戦などをテーマに、その場に合わせて一緒に内容をつくります。
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <div className="font-semibold">対話・コーチング</div>
              <p className="mt-2 text-sm text-stone-700">
                個人・少人数での対話を通して、考えや問いを深める時間をつくります。
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <div className="font-semibold">授業・教育連携</div>
              <p className="mt-2 text-sm text-stone-700">
                探究的な学びや授業づくりについて、現場に合わせて一緒に設計していきます。
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <div className="font-semibold">その他</div>
              <p className="mt-2 text-sm text-stone-700">
                「こんなことできる？」という相談からでも大丈夫です。
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-stone-600">
            ※ 基本的にはお互いノーギャラでやっていますが、
            交通費等をご負担いただける場合はとても助かります。
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold">まずは、話してみませんか？</h2>
              <p className="mt-4 leading-8 text-stone-700">
                このプロジェクトは、出会いから始まります。
                <br />
                雑談でも、少しの時間でも大丈夫なので、
                <br />
                少しでもお話しできたらうれしいです。
                <br />
                <br />
                あなたのこれまでや、いま考えていることを、気軽に聴かせてください。
                <br />
                <br />
                遠くても、近くても、タイミングが合えば会いにいきます。
              </p>
              <div className="mt-6 space-y-3 text-stone-700">
                <div>・自分の人生を少し言葉にしてみたい方</div>
                <div>・誰かに話を聴いてほしい方</div>
                <div>・教育や生き方について対話してみたい方</div>
              </div>
            </div>
            <div className="rounded-3xl bg-stone-900 p-6 text-white">
              <div className="text-sm text-white/70">まずは一言</div>
              <p className="mt-3 leading-7 text-white/90">
                「会ってもいいよ」
                <br />
                「少し話してみたい」
                <br />
                <br />
                その一言をもらえたら、うれしいです。
                <br />
                <br />
                こちらから日程などご相談させていただきますので、
                気軽にご連絡ください。
              </p>
              <a
                href="#"
                className="mt-5 inline-block rounded-2xl bg-amber-500 px-6 py-3 text-white"
              >
                連絡してみる
              </a>
              <div className="mt-4 text-xs text-white/60">
                ※ 後日GoogleフォームやSNSリンクを設置予定
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-10">
        <div className="text-sm leading-7 text-stone-600">
          <div className="font-semibold text-stone-800">このプロジェクトのリアル</div>
          <p className="mt-2">
            基本的にはお互いノーギャラでやっています。
            <br />
            ただ、高知の西の端にいるので、移動にどうしてもお金がかかります。
            <br />
            交通費を出していただける機会があれば、めちゃくちゃうれしいです。
            <br />
            もちろん、なくても行きます。
            <br />
            そして、もし何かいただけるものがあれば、遠慮なく受け取ります（笑）
          </p>
        </div>
      </section>

      <a
        href="#top"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-stone-900 px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-stone-700"
      >
        ↑ 先頭へ
      </a>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-stone-500 md:px-10">
          © 小島の100人プロジェクト / Ojima 100 People Project
        </div>
      </footer>
    </div>
  );
}
