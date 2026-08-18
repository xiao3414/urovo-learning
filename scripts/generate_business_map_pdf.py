# -*- coding: utf-8 -*-
"""生成优博讯业务全景认知图 PDF（reportlab）"""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import shutil

FONT_PATH = r"C:\Windows\Fonts\msyh.ttc"
OUT_DIR = Path(__file__).resolve().parent.parent / "docs"
OUT_DIR.mkdir(exist_ok=True)
OUT_FILE = OUT_DIR / "优博讯业务全景认知图.pdf"
DESKTOP = Path.home() / "Desktop" / "优博讯业务全景认知图.pdf"

pdfmetrics.registerFont(TTFont("MSYH", FONT_PATH))
pdfmetrics.registerFont(TTFont("MSYH-Bold", FONT_PATH))

W, H = A4


def S(name, **kw):
    defaults = dict(fontName="MSYH", fontSize=10, leading=16, textColor=colors.HexColor("#303133"))
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)


STYLES = {
    "title": S("title", fontName="MSYH-Bold", fontSize=22, leading=28, textColor=colors.HexColor("#0052D9"), alignment=1),
    "subtitle": S("subtitle", fontSize=13, leading=20, textColor=colors.HexColor("#606266"), alignment=1),
    "h1": S("h1", fontName="MSYH-Bold", fontSize=16, leading=22, textColor=colors.HexColor("#0052D9"), spaceBefore=12, spaceAfter=6),
    "h2": S("h2", fontName="MSYH-Bold", fontSize=12, leading=18, textColor=colors.HexColor("#1D2129"), spaceBefore=10, spaceAfter=4),
    "body": S("body", fontSize=10, leading=16),
    "small": S("small", fontSize=8, leading=12, textColor=colors.grey),
    "flow": S("flow", fontSize=9, leading=14),
}


def P(text, style="body"):
    return Paragraph(text.replace("\n", "<br/>"), STYLES[style])


def bullet(items):
    return P("<br/>".join(f"• {i}" for i in items))


def table(headers, rows, col_ratios=None):
    data = [headers] + rows
    t = Table(data, colWidths=None, repeatRows=1)
    t.setStyle(TableStyle([
        ("FONT", (0, 0), (-1, -1), "MSYH", 9),
        ("FONT", (0, 0), (-1, 0), "MSYH-Bold", 9),
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0052D9")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F5F7FA")]),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#DCDFE6")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    if col_ratios:
        total = W - 40 * mm
        t._argW = [total * r for r in col_ratios]
    return t


def build():
    doc = SimpleDocTemplate(
        str(OUT_FILE), pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=18 * mm, bottomMargin=18 * mm,
        title="优博讯业务全景认知图",
    )
    story = []

    # 封面
    story += [
        Spacer(1, 40 * mm),
        P("优博讯业务全景认知图", "title"),
        Spacer(1, 6 * mm),
        P("销售新人专用 · 产 · 研 · 销 全链路认知", "subtitle"),
        Spacer(1, 4 * mm),
        P("以 DT630 企业级智能手机终端为例", "subtitle"),
        Spacer(1, 20 * mm),
        P("资料来源：优博讯集训课件、官网公开信息（urovo.com）、VDC 行业报告", "small"),
        P("编制目的：建立「公司 — 产品 — 流程 — 协作」全景认知", "small"),
        PageBreak(),
    ]

    # 一、公司定位
    story += [
        P("一、公司定位与业务版图", "h1"),
        P("优博讯（UROVO，深交所 300531）是全球领先的 IoT 行业数字化方案提供商，"
          "打造「端-云-软件」一体化生态，服务物流、零售、制造、金融、医疗等行业。"),
        P("1.1 三大业务体系", "h2"),
        bullet([
            "营销体系：营销中心、市场部、行业战略大客户中心",
            "研发体系：产品部、移动产品事业部、行业应用事业部、创新开发事业部",
            "供应链体系：产品制造中心、PMC、采购管理部、品质中心",
        ]),
        P("1.2 产品线全景", "h2"),
        bullet([
            "智能终端：PDA / RFID 手持 / 穿戴式 / 工业平板 / 扫描枪",
            "支付终端：金融 POS / 非金 POS / 扫码盒 / 云音箱",
            "软件生态：UEE 设备管理 · UMS 运维 · USDK · OEM Config",
            "行业方案：智慧物流 · 智能制造 · 连锁零售 · 金融支付",
        ]),
        P("1.3 市场地位", "h2"),
        bullet([
            "2006 年推出国内首款 PDA，AIDC 领域 20 年创新",
            "2024 年 rugged PDA 出货量：全球第二、中国第一（VDC）",
            "2021 发布 UEE 生态平台；DT50/RT40S 获德国红点奖",
        ]),
        PageBreak(),
    ]

    # 二、组织架构
    story += [
        P("二、组织架构与协作关系", "h1"),
        P("2.1 与销售直接相关的部门", "h2"),
        table(
            ["部门", "职能", "销售关联点"],
            [
                ["产品部", "产品规划/GTM", "需求评估·PRD·产品培训·上市节奏"],
                ["移动产品事业部", "PDA/POS 研发", "IPD开发·样机·技术参数·交期"],
                ["行业应用事业部", "行业软件", "WMS/MES 定制·项目交付"],
                ["市场部", "品牌/营销", "彩页·展会·案例·SC05物料"],
                ["营销中心", "销售/渠道", "商机·报价·合同·渠道政策"],
                ["工程部 FAE", "技术支持", "POC·样机·售前售后"],
                ["产品制造中心", "生产制造", "量产·交期·质量"],
                ["客户服务中心", "售后服务", "400·工单·SLA"],
                ["品质中心", "质量管理", "IQC/IPQC/FQC·客诉"],
                ["财务中心", "营销财管", "信用·合同·回款"],
            ],
            [0.22, 0.28, 0.50],
        ),
        Spacer(1, 6 * mm),
        P("2.2 销售项目协作链", "h2"),
        P("客户需求 → 销售跟进 → 产品/FAE 评估 → 方案+POC → 报价(营销+财务)"
          " → 合同 → 排产交付 → 客服售后 → 反馈迭代"),
        PageBreak(),
    ]

    # 三、DT630
    story += [
        P("三、DT630 产品档案", "h1"),
        P("DT630 是企业级智能手机终端（2026 NRF 发布），定位零售/物流/医疗一线："
          "智能手机体验 + 工业级采集 + 可选内置 UHF RFID。"),
        P("3.1 核心规格与卖点", "h2"),
        table(
            ["维度", "参数", "销售话术要点"],
            [
                ["处理器", "8核2.5GHz·4nm·NPU", "Android15可升19·边缘AI就绪"],
                ["形态", "240g·10.4mm·6.58\"FHD+", "比PDA更轻薄·员工愿用"],
                ["扫描", "后置专业扫描引擎", "即扫即看·绿光瞄准·减疲劳"],
                ["RFID", "Impinj Gen2X(可选)", "1.2m·≥50标签/秒·条码RFID一体"],
                ["影像", "5000万+AI夜景", "4K取证·质检·现场记录"],
                ["连接", "5G+Wi-Fi6E", "2×2 MU-MIMO·实时同步"],
                ["防护", "IP68·1.5m跌落", "工业耐用·降TCO"],
                ["电池", "可拆卸热插拔", "多班次不断电"],
            ],
            [0.18, 0.32, 0.50],
        ),
        Spacer(1, 4 * mm),
        P("3.2 目标场景", "h2"),
        bullet([
            "零售：盘点、查价、移动收银、会员/NFC支付",
            "物流：揽派件、仓储盘点、RFID批量识读",
            "医疗/现场：移动护理、资产盘点、实时上报",
        ]),
        PageBreak(),
    ]

    # 四、产研销全流程
    story += [
        P("四、DT630 产 · 研 · 销 全流程（核心）", "h1"),
        P("4.1 产品规划（产品部）", "h2"),
        table(["阶段", "主责", "关键动作"], [
            ["市场洞察", "产品部+市场", "零售/物流需轻薄+RFID一体"],
            ["竞品分析", "产品部", "消费手机 vs 工业PDA 空白"],
            ["产品定义", "产品部", "规格·目标价·Roadmap"],
            ["立项", "产品部+研发", "Charter·CDCP概念决策"],
            ["PRD", "产品部", "功能清单·验收标准"],
        ], [0.2, 0.25, 0.55]),
        Spacer(1, 4 * mm),
        P("4.2 研发设计（移动产品事业部 · IPD）", "h2"),
        table(["阶段", "主责", "关键动作"], [
            ["架构", "软/硬件部", "Android15·扫描+RFID集成"],
            ["ID/结构", "结构/ID", "10.4mm堆叠·后置人体工学"],
            ["EVT", "样机组", "工程验证样机"],
            ["DVT", "测试部", "扫描/RFID/跌落/IP68/5G"],
            ["PVT", "NPI工程", "小批量试产"],
            ["决策", "项目部", "PDCP计划·LRR量产评审"],
            ["认证", "认证组", "CCC/SRRC/GMS等"],
        ], [0.2, 0.25, 0.55]),
        Spacer(1, 4 * mm),
        P("4.3 量产供应链", "h2"),
        table(["阶段", "主责", "关键动作"], [
            ["BOM", "项目部/PMC", "编码·BOM·ECN"],
            ["采购", "采购部", "扫描头/Impinj等关键件"],
            ["IQC", "品质中心", "来料检验"],
            ["生产", "制造中心", "SMT·组装·老化"],
            ["OQC", "品质中心", "出厂检验·SN追溯"],
            ["发货", "供应链", "备货·物流"],
        ], [0.2, 0.25, 0.55]),
        PageBreak(),
        P("4.4 上市推广（市场部 GTM）", "h2"),
        table(["阶段", "主责", "关键动作"], [
            ["物料", "市场部", "彩页·规格书·官网·视频"],
            ["发布", "市场部", "NRF2026·IOTE等展会"],
            ["培训", "产品+市场", "销售培训·FAQ·竞品"],
            ["灯塔", "销售+FAE", "头部客户POC·案例"],
            ["渠道", "营销中心", "代理政策·价格体系"],
        ], [0.2, 0.25, 0.55]),
        Spacer(1, 4 * mm),
        P("4.5 销售成交（营销中心）", "h2"),
        table(["阶段", "主责", "关键动作"], [
            ["商机", "销售", "展会/渠道/转介绍"],
            ["调研", "销售", "SPIN/BANT·确认场景"],
            ["方案", "销售+FAE", "彩页·Demo·ROI"],
            ["POC", "FAE+样机", "5~10台·2周验证"],
            ["报价", "销售+财务", "配置价·信用·合同"],
            ["交付", "销售+PMC", "PO·交期·签收"],
        ], [0.2, 0.25, 0.55]),
        Spacer(1, 4 * mm),
        P("4.6 售后迭代", "h2"),
        table(["阶段", "主责", "关键动作"], [
            ["售后", "客服+FAE", "400/工单/UMS远程"],
            ["客诉", "品质+研发", "根因·固件改进"],
            ["迭代", "产品+研发", "功能升级·Android更新"],
            ["EOL", "产品部", "换代·库存消化"],
        ], [0.2, 0.25, 0.55]),
        Spacer(1, 6 * mm),
        P("4.7 全景流程图", "h2"),
        P("<b>[市场需求]</b> → <b>[产品规划/立项]</b> → <b>[IPD研发]</b> → "
          "<b>[EVT→DVT→PVT]</b> → <b>[认证·量产]</b> → <b>[GTM上市]</b><br/>"
          "→ <b>[销售商机]</b> → <b>[方案+POC]</b> → <b>[报价合同]</b> → "
          "<b>[排产发货]</b> → <b>[客户验收]</b> → <b>[售后服务]</b> → "
          "<b>[反馈迭代]</b> → 回到市场需求"),
        PageBreak(),
    ]

    # 五、行动清单
    story += [
        P("五、销售新人行动清单", "h1"),
        P("5.1 见客户前", "h2"),
        bullet([
            "file.urovo.com 下载 DT630 彩页/规格书",
            "SC05 申请定制 PPT/视频（市场部）",
            "明确：要条码？RFID？轻薄？续航？",
            "准备同行业案例 1~2 个",
        ]),
        P("5.2 方案阶段找谁", "h2"),
        bullet([
            "技术 → FAE | 定制软件 → 行业应用事业部",
            "样机POC → FAE+样机组 | 交期 → PMC",
            "合同信用 → 财务营销财管部",
        ]),
        P("5.3 红线（不可对外承诺）", "h2"),
        bullet([
            "未公开产品信息/价格/其他客户数据",
            "未经评估的开发周期和定制范围",
            "编造的技术指标",
        ]),
        Spacer(1, 8 * mm),
        P("官网 www.urovo.com | 资料库 file.urovo.com | 热线 400-888-6989", "small"),
        P("免责声明：仅供内部学习参考，流程以公司最新制度为准，参数以官方规格书为准。", "small"),
    ]

    doc.build(story, onFirstPage=_footer, onLaterPages=_footer)

    if DESKTOP.parent.exists():
        shutil.copy2(OUT_FILE, DESKTOP)
    print(f"OK: {OUT_FILE}")
    if DESKTOP.exists():
        print(f"OK: {DESKTOP}")


def _footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("MSYH", 8)
    canvas.setFillColor(colors.grey)
    canvas.drawCentredString(W / 2, 10 * mm, f"优博讯业务全景认知图  |  第 {canvas.getPageNumber()} 页")
    canvas.restoreState()


if __name__ == "__main__":
    build()
