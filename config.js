/**
 * Project configs
 *
 * @warning : 경로 설정시 경로상 앞과뒤 "/" 작성에 유의해주세요.
 *
 */

const project = {
  title: 'project', // 프로젝트명
  default: {
    src: 'src',
    dest: 'dist',
  },
  build: { // 빌드 경로 및 개별 폴더 경로 설정
    svn: 'D:/fe',
    baseDir: 'project/sample',
    styles: 'css',
    scripts: 'js',
    images: 'images',
    fonts: 'fonts',
  },
  deploy: { // 이미지 배포 후 빌드 파일 이미지 경로 접두사 설정
    echosting : '//img.echosting.cafe24.com',
  }
};

/**
 * 프로젝트 경로 설정
 */
const paths = {
  html: {
    src: `${project.default.src}/app/**/*.html`,
    dest: project.default.dest,
    dir: `${project.default.src}/app`,
  },
  pugs: {
    src: `${project.default.src}/app/**/*.pug`,
    dest: project.default.dest,
    dir: `${project.default.src}/app`,
  },
  styles: {
    src: `${project.default.src}/css/index.scss`,
    dest: `${project.default.dest}/css`,
    wildcard: `${project.default.src}/css/**/*.scss`,
  },
  scripts: {
    src: `${project.default.src}/js/**/*.js`,
    dest: `${project.default.dest}/js`,
    wildcard: `${project.default.src}/js/**/*.js`,
    ignore: [
      `${project.default.src}/js/plugins/**/*.js`,
      `${project.default.src}/js/vue/**/*.js`,
      `${project.default.src}/js/ui/**/*.js`,
    ],
    ignorePath: [
      `${project.default.dest}/js/plugins`,
      `${project.default.dest}/js/vue`,
      `${project.default.dest}/js/ui`,
    ]
  },
  images: {
    src: `${project.default.src}/images/**/*.*`,
    dest: `${project.default.dest}/images`,
    wildcard: `${project.default.src}/images/**/*.*`,
  },
  fonts: {
    src: `${project.default.src}/fonts/**/*.{ttf,otf,woff,woff2,eot,svg}`,
    dest: `${project.default.dest}/fonts`,
  }
};

module.exports = { project, paths };
