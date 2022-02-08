import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function Publications() {
    return (
        <div className="min-h-full">
            <div className="grid main-container grid-cols-12 auto-rows-max gap-1 px-24 mb-8" style={{ minHeight: 'calc(100% - 15rem)' }}>
                <div className="col-span-12 py-4 mb-4">
                    <NavBar />
                </div>
                <div className="col-span-full md:col-span-4">
                    <h2 className="text-5xl border-primary border-b-4 inline-block text-base-content font-bold">Publications</h2>
                </div>
                <div className="col-span-full md:col-span-8">
                    <h3 className="text-2xl font-semibold">Multidimensional representations in late-life depression: convergence in neuroimaging, cognition, clinical symptomatology and genetics</h3>
                    <h4 className="text-primary">Junhao Wen, Cynthia H.Y. Fu, Duygu Tosun, Yogasudha Veturi, Zhijian Yang, Ahmed Abdulkadir, Elizabeth Mamourian, Dhivya Srinivasan, Jingxuan Bao, Guray Erus, Haochang Shou, Mohamad Habes, Jimit Doshi, Erdem Varol, Scott R Mackin, Aristeidis Sotiras, Yong Fan, Andrew J. Saykin, Yvette I. Sheline, Li Shen, Marylyn D. Ritchie, David A. Wolk, Marilyn Albert, Susan M. Resnick, Christos Davatzikos</h4>
                    <h5>In <i>JAMA Psychiatry</i>, 2022.</h5>
                    <div className="btn-group mt-1">
                        <a target="_blank" rel="noreferrer" href="https://arxiv.org/abs/2110.11347" className="btn btn-primary btn-outline btn-sm">Link</a>
                        <button onClick={() => document.getElementById('download').classList.toggle('modal-open')} className="btn btn-primary btn-outline btn-sm">Download GWAS</button>
                    </div>
                    <img alt="" src={process.env.PUBLIC_URL + "/thumbnail_Fig_JAMA_Psy.png"} className="w-100" />

                </div>
            </div>
            <Footer />
        </div>
    )
}