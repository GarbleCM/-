const cityArr = [
  {
    value: '广东省',
    level: 0,
    label: '广东省',
    children: [
      {
        value: '广州市',
        level: 1,
        label: '广州市',
        children: [
          {
            value: '荔湾区',
            level: 2,
            label: '荔湾区'
          },
          {
            value: '越秀区',
            level: 2,
            label: '越秀区'
          },
          {
            value: '海珠区',
            level: 2,
            label: '海珠区'
          },
          {
            value: '天河区',
            level: 2,
            label: '天河区'
          },
          {
            value: '白云区',
            level: 2,
            label: '白云区'
          },
          {
            value: '黄埔区',
            level: 2,
            label: '黄埔区'
          },
          {
            value: '番禺区',
            level: 2,
            label: '番禺区'
          },
          {
            value: '花都区',
            level: 2,
            label: '花都区'
          },
          {
            value: '南沙区',
            level: 2,
            label: '南沙区'
          },
          {
            value: '从化区',
            level: 2,
            label: '从化区'
          },
          {
            value: '增城区',
            level: 2,
            label: '增城区'
          }
        ]
      },
      {
        value: '韶关市',
        level: 1,
        label: '韶关市',
        children: [
          {
            value: '武江区',
            level: 2,
            label: '武江区'
          },
          {
            value: '浈江区',
            level: 2,
            label: '浈江区'
          },
          {
            value: '曲江区',
            level: 2,
            label: '曲江区'
          },
          {
            value: '始兴县',
            level: 2,
            label: '始兴县'
          },
          {
            value: '仁化县',
            level: 2,
            label: '仁化县'
          },
          {
            value: '翁源县',
            level: 2,
            label: '翁源县'
          },
          {
            value: '乳源瑶族自治县',
            level: 2,
            label: '乳源瑶族自治县'
          },
          {
            value: '新丰县',
            level: 2,
            label: '新丰县'
          },
          {
            value: '乐昌市',
            level: 2,
            label: '乐昌市'
          },
          {
            value: '南雄市',
            level: 2,
            label: '南雄市'
          }
        ]
      },
      {
        value: '深圳市',
        level: 1,
        label: '深圳市',
        children: [
          {
            value: '罗湖区',
            level: 2,
            label: '罗湖区'
          },
          {
            value: '福田区',
            level: 2,
            label: '福田区'
          },
          {
            value: '南山区',
            level: 2,
            label: '南山区'
          },
          {
            value: '宝安区',
            level: 2,
            label: '宝安区'
          },
          {
            value: '龙岗区',
            level: 2,
            label: '龙岗区'
          },
          {
            value: '盐田区',
            level: 2,
            label: '盐田区'
          },
          {
            value: '龙华新区',
            level: 2,
            label: '龙华新区'
          },
          {
            value: '大鹏新区',
            level: 2,
            label: '大鹏新区'
          }
        ]
      },
      {
        value: '珠海市',
        level: 1,
        label: '珠海市',
        children: [
          {
            value: '香洲区',
            level: 2,
            label: '香洲区'
          },
          {
            value: '斗门区',
            level: 2,
            label: '斗门区'
          },
          {
            value: '金湾区',
            level: 2,
            label: '金湾区'
          },
          {
            value: '万山海洋开发试验区',
            level: 2,
            label: '万山海洋开发试验区'
          },
          {
            value: '高新技术产业开发区',
            level: 2,
            label: '高新技术产业开发区'
          },
          {
            value: '横琴新区',
            level: 2,
            label: '横琴新区'
          },
          {
            value: '高栏港经济区',
            level: 2,
            label: '高栏港经济区'
          },
          {
            value: '保税区',
            level: 2,
            label: '保税区'
          }
        ]
      },
      {
        value: '汕头市',
        level: 1,
        label: '汕头市',
        children: [
          {
            value: '龙湖区',
            level: 2,
            label: '龙湖区'
          },
          {
            value: '金平区',
            level: 2,
            label: '金平区'
          },
          {
            value: '濠江区',
            level: 2,
            label: '濠江区'
          },
          {
            value: '潮阳区',
            level: 2,
            label: '潮阳区'
          },
          {
            value: '潮南区',
            level: 2,
            label: '潮南区'
          },
          {
            value: '澄海区',
            level: 2,
            label: '澄海区'
          },
          {
            value: '南澳县',
            level: 2,
            label: '南澳县'
          }
        ]
      },
      {
        value: '佛山市',
        level: 1,
        label: '佛山市',
        children: [
          {
            value: '禅城区',
            level: 2,
            label: '禅城区'
          },
          {
            value: '南海区',
            level: 2,
            label: '南海区'
          },
          {
            value: '顺德区',
            level: 2,
            label: '顺德区'
          },
          {
            value: '三水区',
            level: 2,
            label: '三水区'
          },
          {
            value: '高明区',
            level: 2,
            label: '高明区'
          }
        ]
      },
      {
        value: '江门市',
        level: 1,
        label: '江门市',
        children: [
          {
            value: '江门市',
            level: 2,
            label: '蓬江区'
          },
          {
            value: '江海区',
            level: 2,
            label: '江海区'
          },
          {
            value: '新会区',
            level: 2,
            label: '新会区'
          },
          {
            value: '台山市',
            level: 2,
            label: '台山市'
          },
          {
            value: '开平市',
            level: 2,
            label: '开平市'
          },
          {
            value: '鹤山市',
            level: 2,
            label: '鹤山市'
          },
          {
            value: '恩平市',
            level: 2,
            label: '恩平市'
          }
        ]
      },
      {
        value: '湛江市',
        level: 1,
        label: '湛江市',
        children: [
          {
            value: '赤坎区',
            level: 2,
            label: '赤坎区'
          },
          {
            value: '霞山区',
            level: 2,
            label: '霞山区'
          },
          {
            value: '坡头区',
            level: 2,
            label: '坡头区'
          },
          {
            value: '麻章区',
            level: 2,
            label: '麻章区'
          },
          {
            value: '遂溪县',
            level: 2,
            label: '遂溪县'
          },
          {
            value: '徐闻县',
            level: 2,
            label: '徐闻县'
          },
          {
            value: '廉江市',
            level: 2,
            label: '廉江市'
          },
          {
            value: '雷州市',
            level: 2,
            label: '雷州市'
          },
          {
            value: '吴川市',
            level: 2,
            label: '吴川市'
          },
          {
            value: '湛江经济技术开发区',
            level: 2,
            label: '湛江经济技术开发区'
          },
          {
            value: '湛江农垦',
            level: 2,
            label: '湛江农垦'
          }
        ]
      },
      {
        value: '茂名市',
        level: 1,
        label: '茂名市',
        children: [
          {
            value: '茂南区',
            level: 2,
            label: '茂南区'
          },
          {
            value: '茂港区',
            level: 2,
            label: '茂港区'
          },
          {
            value: '电白区',
            level: 2,
            label: '电白区'
          },
          {
            value: '茂名滨海新区',
            level: 2,
            label: '茂名滨海新区'
          },
          {
            value: '茂名高新技术产业开发区',
            level: 2,
            label: '茂名高新技术产业开发区'
          },
          {
            value: '电白区',
            level: 2,
            label: '电白区'
          },
          {
            value: '高州市',
            level: 2,
            label: '高州市'
          },
          {
            value: '化州市',
            level: 2,
            label: '化州市'
          },
          {
            value: '信宜市',
            level: 2,
            label: '信宜市'
          }
        ]
      },
      {
        value: '肇庆市',
        level: 1,
        label: '肇庆市',
        children: [
          {
            value: '端州区',
            level: 2,
            label: '端州区'
          },
          {
            value: '鼎湖区',
            level: 2,
            label: '鼎湖区'
          },
          {
            value: '广宁县',
            level: 2,
            label: '广宁县'
          },
          {
            value: '怀集县',
            level: 2,
            label: '怀集县'
          },
          {
            value: '封开县',
            level: 2,
            label: '封开县'
          },
          {
            value: '德庆县',
            level: 2,
            label: '德庆县'
          },
          {
            value: '高新区',
            level: 2,
            label: '高新区'
          },
          {
            value: '高要区',
            level: 2,
            label: '高要区'
          },
          {
            value: '四会市',
            level: 2,
            label: '四会市'
          }
        ]
      },
      {
        value: '惠州市',
        level: 1,
        label: '惠州市',
        children: [
          {
            value: '惠城区',
            level: 2,
            label: '惠城区'
          },
          {
            value: '惠阳区',
            level: 2,
            label: '惠阳区'
          },
          {
            value: '博罗县',
            level: 2,
            label: '博罗县'
          },
          {
            value: '惠东县',
            level: 2,
            label: '惠东县'
          },
          {
            value: '龙门县',
            level: 2,
            label: '龙门县'
          },
          {
            value: '大亚湾经济开发区',
            level: 2,
            label: '大亚湾经济开发区'
          },
          {
            value: '仲恺高新技术产业开发区',
            level: 2,
            label: '仲恺高新技术产业开发区'
          }
        ]
      },
      {
        value: '梅州市',
        level: 1,
        label: '梅州市',
        children: [
          {
            value: '梅江区',
            level: 2,
            label: '梅江区'
          },
          {
            value: '梅县',
            level: 2,
            label: '梅县'
          },
          {
            value: '大埔县',
            level: 2,
            label: '大埔县'
          },
          {
            value: '丰顺县',
            level: 2,
            label: '丰顺县'
          },
          {
            value: '五华县',
            level: 2,
            label: '五华县'
          },
          {
            value: '平远县',
            level: 2,
            label: '平远县'
          },
          {
            value: '蕉岭县',
            level: 2,
            label: '蕉岭县'
          },
          {
            value: '兴宁市',
            level: 2,
            label: '兴宁市'
          }
        ]
      },
      {
        value: '汕尾市',
        level: 1,
        label: '汕尾市',
        children: [
          {
            value: '城区',
            level: 2,
            label: '城区'
          },
          {
            value: '海丰县',
            level: 2,
            label: '海丰县'
          },
          {
            value: '陆河县',
            level: 2,
            label: '陆河县'
          },
          {
            value: '红海湾',
            level: 2,
            label: '红海湾'
          },
          {
            value: '农垦',
            level: 2,
            label: '农垦'
          },
          {
            value: '华侨管理区',
            level: 2,
            label: '华侨管理区'
          },
          {
            value: '陆丰市',
            level: 2,
            label: '陆丰市'
          }
        ]
      },
      {
        value: '河源市',
        level: 1,
        label: '河源市',
        children: [
          {
            value: '源城区',
            level: 2,
            label: '源城区'
          },
          {
            value: '紫金县',
            level: 2,
            label: '紫金县'
          },
          {
            value: '龙川县',
            level: 2,
            label: '龙川县'
          },
          {
            value: '连平县',
            level: 2,
            label: '连平县'
          },
          {
            value: '和平县',
            level: 2,
            label: '和平县'
          },
          {
            value: '东源县',
            level: 2,
            label: '东源县'
          },
          {
            value: '河源江东新区',
            level: 2,
            label: '河源江东新区'
          }
        ]
      },
      {
        value: '阳江市',
        level: 1,
        label: '阳江市',
        children: [
          {
            value: '江城区',
            level: 2,
            label: '江城区'
          },
          {
            value: '阳西县',
            level: 2,
            label: '阳西县'
          },
          {
            value: '阳东区',
            level: 2,
            label: '阳东区'
          },
          {
            value: '农垦',
            level: 2,
            label: '农垦'
          },
          {
            value: '海陵区',
            level: 2,
            label: '海陵区'
          },
          {
            value: '阳江高新技术产业开发区',
            level: 2,
            label: '阳江高新技术产业开发区'
          },
          {
            value: '阳春市',
            level: 2,
            label: '阳春市'
          }
        ]
      },
      {
        value: '清远市',
        level: 1,
        label: '清远市',
        children: [
          {
            value: '清城区',
            level: 2,
            label: '清城区'
          },
          {
            value: '清新区',
            level: 2,
            label: '清新区'
          },
          {
            value: '佛冈县',
            level: 2,
            label: '佛冈县'
          },
          {
            value: '阳山县',
            level: 2,
            label: '阳山县'
          },
          {
            value: '连山壮族瑶族自治县',
            level: 2,
            label: '连山壮族瑶族自治县'
          },
          {
            value: '连南瑶族自治县',
            level: 2,
            label: '连南瑶族自治县'
          },
          {
            value: '英德市',
            level: 2,
            label: '英德市'
          },
          {
            value: '连州市',
            level: 2,
            label: '连州市'
          }
        ]
      },
      {
        value: '东莞市',
        level: 1,
        label: '东莞市',
        children: [
          {
            value: '市辖区',
            level: 2,
            label: '市辖区'
          }
        ]
      },
      {
        value: '中山市',
        level: 1,
        label: '中山市',
        children: [
          {
            value: '市辖区',
            level: 2,
            label: '市辖区'
          }
        ]
      },
      {
        value: '潮州市',
        level: 1,
        label: '潮州市',
        children: [
          {
            value: '湘桥区',
            level: 2,
            label: '湘桥区'
          },
          {
            value: '潮安区',
            level: 2,
            label: '潮安区'
          },
          {
            value: '饶平县',
            level: 2,
            label: '饶平县'
          },
          {
            value: '枫溪区',
            level: 2,
            label: '枫溪区'
          }
        ]
      },
      {
        value: '揭阳市',
        level: 1,
        label: '揭阳市',
        children: [
          {
            value: '榕城区',
            level: 2,
            label: '榕城区'
          },
          {
            value: '揭东区',
            level: 2,
            label: '揭东区'
          },
          {
            value: '揭西县',
            level: 2,
            label: '揭西县'
          },
          {
            value: '惠来县',
            level: 2,
            label: '惠来县'
          },
          {
            value: '产业园',
            level: 2,
            label: '产业园'
          },
          {
            value: '空港经济区',
            level: 2,
            label: '空港经济区'
          },
          {
            value: '大南山区',
            level: 2,
            label: '大南山区'
          },
          {
            value: '普侨区',
            level: 2,
            label: '普侨区'
          },
          {
            value: '揭阳高新技术开发区',
            level: 2,
            label: '揭阳高新技术开发区'
          },
          {
            value: '揭阳农垦',
            level: 2,
            label: '揭阳农垦'
          },
          {
            value: '揭阳大南海石化工业区',
            level: 2,
            label: '揭阳大南海石化工业区'
          },
          {
            value: '普宁市',
            level: 2,
            label: '普宁市'
          }
        ]
      },
      {
        value: '云浮市',
        level: 1,
        label: '云浮市',
        children: [
          {
            value: '云城区',
            level: 2,
            label: '云城区'
          },
          {
            value: '云安区',
            level: 2,
            label: '云安区'
          },
          {
            value: '新兴县',
            level: 2,
            label: '新兴县'
          },
          {
            value: '郁南县',
            level: 2,
            label: '郁南县'
          },
          {
            value: '罗定市',
            level: 2,
            label: '罗定市'
          }
        ]
      }
    ]
  }

]
export default {
  cityArr
}
