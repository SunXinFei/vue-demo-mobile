import blogList from './data/bloglist';
import blogRuleDetail from './data/blog-rule-detail';
import * as CONST from "../constant";
export default function (mock) {
    //获取
    mock.onGet(`${CONST.baseUrl}/blog-rule/lists`).reply(config => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([200, {
                    code: 0,
                    message: '成功',
                    data: blogList
                }]);
            }, 1000);
        });
    });
    mock.onGet(`${CONST.baseUrl}/blog-rule/detail`).reply(config => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([200, {
                    code: 0,
                    message: '成功',
                    data: blogRuleDetail
                }]);
            }, 1000);
        });
    });
}