# GitHub コネクタ機能ガイド

## 概要

GitHub コネクタは、Manus プラットフォームの統合機能で、GitHub リポジトリのデータを直接取得し、ウェブアプリケーションに表示できます。このガイドでは、GitHub コネクタの基本的な使い方と、学生団体ホームページでの活用例を説明します。

## GitHub コネクタの主な機能

### 1. **リポジトリ情報の取得**
GitHub コネクタを使用すると、以下のリポジトリ情報を取得できます：

- **リポジトリ名**：プロジェクトの名前
- **説明**：リポジトリの説明文
- **スター数**：プロジェクトの人気度を示す指標
- **フォーク数**：プロジェクトが複製された回数
- **言語**：使用されているプログラミング言語
- **最終更新日時**：最後にコミットされた日時
- **ライセンス**：プロジェクトのライセンス情報
- **URL**：リポジトリへの直接リンク

### 2. **ユーザー情報の取得**
GitHub ユーザーのプロフィール情報も取得可能です：

- **ユーザー名**：GitHub アカウント名
- **プロフィール画像**：ユーザーのアバター
- **フォロワー数**：ユーザーをフォローしている人数
- **フォロー中の数**：ユーザーがフォローしている人数
- **パブリック リポジトリ数**：公開されているリポジトリの総数
- **バイオ**：ユーザーの自己紹介文

### 3. **コミット履歴の取得**
リポジトリのコミット履歴を取得して、プロジェクトの開発活動を可視化できます：

- **コミット メッセージ**：変更内容の説明
- **コミッター**：変更を行ったユーザー
- **コミット日時**：変更が行われた日時
- **コミット ハッシュ**：コミットの一意識別子

## 学生団体ホームページでの活用例

### 例1：プロジェクトショーケース
学生団体が開発したプロジェクトを GitHub から自動的に取得し、ホームページに表示します。

```javascript
// 実装例（疑似コード）
import { useGitHubConnector } from '@/hooks/useGitHubConnector';

export function ProjectShowcase() {
  const { repositories, loading } = useGitHubConnector({
    owner: 'elite-student-org',
    type: 'repositories'
  });

  return (
    <div className="projects-grid">
      {repositories.map(repo => (
        <ProjectCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          stars={repo.stargazers_count}
          url={repo.html_url}
          language={repo.language}
        />
      ))}
    </div>
  );
}
```

### 例2：貢献者プロフィール
組織のメンバーの GitHub プロフィール情報を表示します。

```javascript
import { useGitHubConnector } from '@/hooks/useGitHubConnector';

export function ContributorProfiles() {
  const { user, loading } = useGitHubConnector({
    owner: 'member-username',
    type: 'user'
  });

  return (
    <div className="contributor-card">
      <img src={user.avatar_url} alt={user.login} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <p>フォロワー: {user.followers}</p>
      <p>パブリック リポジトリ: {user.public_repos}</p>
    </div>
  );
}
```

### 例3：最新アクティビティ フィード
リポジトリの最新コミットを表示し、プロジェクトの開発状況をリアルタイムで共有します。

```javascript
import { useGitHubConnector } from '@/hooks/useGitHubConnector';

export function ActivityFeed() {
  const { commits, loading } = useGitHubConnector({
    owner: 'elite-student-org',
    repo: 'main-project',
    type: 'commits'
  });

  return (
    <div className="activity-feed">
      {commits.map(commit => (
        <ActivityItem
          key={commit.sha}
          message={commit.commit.message}
          author={commit.commit.author.name}
          date={commit.commit.author.date}
        />
      ))}
    </div>
  );
}
```

## GitHub コネクタの設定方法

### ステップ 1：GitHub トークンの取得
1. GitHub にログインします
2. **Settings** → **Developer settings** → **Personal access tokens** に移動
3. **Generate new token** をクリック
4. 必要なスコープ（`public_repo`, `user` など）を選択
5. トークンをコピーして安全に保管

### ステップ 2：Manus プラットフォームでの設定
1. プロジェクト設定に移動
2. **Secrets** セクションで新しいシークレットを追加
3. キー名：`GITHUB_TOKEN`
4. 値：取得した GitHub トークン
5. 保存

### ステップ 3：コンポーネントでの使用
```javascript
const token = import.meta.env.VITE_GITHUB_TOKEN;
const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
  headers: {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json'
  }
});
```

## 実装のベストプラクティス

### 1. **エラーハンドリング**
API リクエストが失敗した場合に備えて、適切なエラーハンドリングを実装します。

```javascript
try {
  const data = await fetchGitHubData(owner, repo);
  setRepositories(data);
} catch (error) {
  console.error('GitHub API Error:', error);
  setError('リポジトリ情報の取得に失敗しました');
}
```

### 2. **キャッシング**
API レート制限を回避するため、取得したデータをキャッシュします。

```javascript
const cache = new Map();

function getCachedData(key) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < 3600000) {
    return cached.data;
  }
  return null;
}

function setCachedData(key, data) {
  cache.set(key, { data, timestamp: Date.now() });
}
```

### 3. **レート制限への対応**
GitHub API には レート制限があります（認証済みユーザーで 1 時間あたり 5,000 リクエスト）。

```javascript
const response = await fetch(url, { headers });
const remaining = response.headers.get('X-RateLimit-Remaining');
const reset = response.headers.get('X-RateLimit-Reset');

if (remaining < 100) {
  console.warn(`API レート制限が近づいています: ${remaining} リクエスト残り`);
}
```

## GitHub コネクタのデータ表示例

### プロジェクトカード
```html
<div class="project-card">
  <h3>プロジェクト名</h3>
  <p class="description">プロジェクトの説明</p>
  <div class="stats">
    <span>⭐ {stars} Stars</span>
    <span>🔀 {forks} Forks</span>
    <span>📝 {language}</span>
  </div>
  <a href="{url}" class="view-link">View on GitHub →</a>
</div>
```

### 貢献者リスト
```html
<div class="contributors">
  <div class="contributor">
    <img src="{avatar_url}" alt="{name}" />
    <h4>{name}</h4>
    <p class="role">Developer</p>
    <p class="bio">{bio}</p>
  </div>
</div>
```

## トラブルシューティング

### 問題：「401 Unauthorized」エラー
**原因**：GitHub トークンが無効または期限切れ
**解決方法**：トークンを再生成し、シークレットを更新

### 問題：「404 Not Found」エラー
**原因**：リポジトリが存在しない、またはアクセス権限がない
**解決方法**：リポジトリ名とオーナー名を確認

### 問題：API レート制限に達した
**原因**：短時間に多くのリクエストを送信
**解決方法**：キャッシング機能を実装し、リクエスト数を削減

## セキュリティに関する注意

- **トークンの保護**：GitHub トークンを絶対に公開しないでください
- **環境変数の使用**：トークンは環境変数として管理します
- **スコープの最小化**：必要最小限のスコープのみを付与します
- **定期的なトークン更新**：セキュリティのため、定期的にトークンを更新します

## 参考資料

- [GitHub REST API ドキュメント](https://docs.github.com/en/rest)
- [GitHub GraphQL API ドキュメント](https://docs.github.com/en/graphql)
- [Manus プラットフォーム ドキュメント](https://manus.im/docs)

## まとめ

GitHub コネクタを活用することで、学生団体のホームページを動的で最新の情報を表示するプラットフォームに変えることができます。プロジェクトの進捗状況、貢献者の情報、最新のアクティビティなど、GitHub から直接データを取得して表示することで、訪問者に組織の活動状況をリアルタイムで伝えることができます。
